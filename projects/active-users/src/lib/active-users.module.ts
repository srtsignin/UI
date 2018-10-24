import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '@srtsignin/api';
import { ActiveUsersService } from './active-users.service';

@NgModule({
  imports: [
    CommonModule,
    ApiModule
  ],
  providers: [
    ActiveUsersService
  ]
})
export class ActiveUsersModule { }
