import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from './course';
import { RolesResponse } from './roles-response';
import { StudentSignInRequest } from './student-sign-in-request';
import { UserBuilder } from './user-builder';
import { User } from './user';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Course,
    RolesResponse,
    StudentSignInRequest,
    UserBuilder,
    User
  ],
  exports: [
    Course,
    RolesResponse,
    StudentSignInRequest,
    UserBuilder,
    User
  ]
})
export class SRTCommonModule { }
