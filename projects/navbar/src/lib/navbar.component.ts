import { Component, OnInit } from '@angular/core';
import { LoginService } from '@srtsignin/login';

@Component({
  selector: 'srtsignin-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedIn: boolean;
  fullName: string;
  roles = [
    {value: 'admin', viewValue: 'Admin'},
    {value: 'staff', viewValue: 'Staff'},
    {value: 'tutor', viewValue: 'Tutor'},
  ];

  constructor(private loginService: LoginService) {
    this.loginService.subscribe({
      next: (loggedIn) => loggedIn ? this.onLogin() : this.onLogout(),
    });
  }

  ngOnInit() {
  }

  onLogin() {
    this.loggedIn = true;
    this.fullName = this.loginService.getFullName();
  }

  onLogout() {
    this.loggedIn = false;
    this.fullName = '';
  }

}
