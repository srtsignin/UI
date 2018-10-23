import { Component, OnInit } from '@angular/core';
import { ActiveUsersService } from '@srtsignin/active-users';
import { User, Student } from '@srtsignin/common';
import { LoginService } from '@srtsignin/login';

@Component({
  selector: 'srtsignin-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css']
})
export class TutorComponent implements OnInit {

  tutor: User;
  students: Student[];

  constructor(private activeUsersService: ActiveUsersService,
    private loginService: LoginService) { }

  ngOnInit() {
    this.tutor = this.loginService.getUser();
    this.refreshActiveUsers();
  }

  refreshActiveUsers() {
    this.activeUsersService.getActiveUsers(this.tutor).subscribe(students => this.students = students.data);
  }

  checkoffUser(student: User) {
    this.activeUsersService.deleteUser(this.tutor, student);
  }

}
