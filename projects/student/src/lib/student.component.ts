import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '@srtsignin/login';
import { ActiveUsersService } from '@srtsignin/active-users';
import { CoursesService } from '@srtsignin/courses';
import { StudentSignInRequest, Course, User } from '@srtsignin/common';

@Component({
  selector: 'srtsignin-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student: User;

  studentCourses: Course[];
  studentCoursesChecked: boolean[];
  courses: Course[];

  description: string;
  courseMessage: string;
  options: Course[] = [];

  constructor(private loginService: LoginService,
    private activeUsersService: ActiveUsersService,
    private coursesService: CoursesService,
    private router: Router) { }

  ngOnInit() {
    this.studentCourses = [];
    this.studentCoursesChecked = [];
    this.courses = [new Course('', '', '')];

    this.student = this.loginService.getUser();

    this.coursesService.getClasses(this.student).subscribe(
      next => {
        this.studentCourses = next.data;
        this.studentCoursesChecked = new Array(next.data.length);
        for (let i = 0; i < this.studentCoursesChecked.length; ++i) {
          this.studentCoursesChecked[i] = false;
        }
      },
      error => {
        console.log(error);
        this.studentCourses = [];
      }
    );
  }

  addCourseRow() {
    this.courses.push(new Course('', '', ''));
  }

  addStudent() {
    const studentSignInRequest = new StudentSignInRequest();
    studentSignInRequest.problemDescription = this.description;
    studentSignInRequest.courses = this.courses.filter((v) => v.number !== '');

    for (let i = 0; i < this.studentCoursesChecked.length; ++i) {
      if (this.studentCoursesChecked[i]) {
        studentSignInRequest.courses.push(this.studentCourses[i]);
      }
    }

    if (studentSignInRequest.courses.length > 0) {
      this.activeUsersService.addUser(this.student, studentSignInRequest).subscribe(
        next => {
          this.router.navigate(['/login']);
        },
        error => console.log(error)
      );
    } else {
      this.courseMessage = 'Must have at least one course filled out.';
    }
  }

  searchCourses(search?: string) {
    this.options = [];
    this.coursesService.getCourses(search).subscribe(
      next => {
        const data = next.data;
        this.options.push(new Course(data.name, data.departent, data.number));
      },
      error => console.log(error)
    );
  }
}
