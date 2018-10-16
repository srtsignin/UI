import { Component, OnInit } from '@angular/core';
import { ActiveUsersService } from '@srtsignin/active-users';
import {StudentSignInRequest} from '@srtsignin/common';

@Component({
  selector: 'srtsignin-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css']
})
export class TutorComponent implements OnInit {

  users: StudentSignInRequest[];

  constructor(private activeUsersService: ActiveUsersService) { }

  ngOnInit() {
    this.refreshActiveUsers();
  }

  clearActiveUsers() {
    this.activeUsersService.clearActiveUsers().subscribe(users => this.users = users.activeUsers);
  }

  refreshActiveUsers() {
    this.activeUsersService.getActiveUsers().subscribe(users => this.users = users.activeUsers);
  }

}
