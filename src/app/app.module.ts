import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { NavbarModule } from '@srtsignin/navbar';
import { LoginModule, LoginComponent, LoginService } from '@srtsignin/login';
import { StudentModule, StudentComponent } from '../../dist/student';
import { TutorModule, TutorComponent } from '../../dist/tutor';
import { RosefireAdapterService } from '@srtsignin/rosefire-adapter';
import { RolesAdapterService } from '@srtsignin/roles-adapter';
import { ActiveUsersService } from '@srtsignin/active-users';
import { CoursesService } from '@srtsignin/courses';
import { ApiModule } from '@srtsignin/api';

import { environment } from '../environments/environment';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/tutor', pathMatch: 'full' },
  { path: 'login', component:  LoginComponent},
  { path: 'student', component:  StudentComponent},
  { path: 'tutor', component: TutorComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NavbarModule,
    LoginModule,
    StudentModule,
    TutorModule,
    ApiModule.forRoot(environment.settings.backend)
  ],
  providers: [
    LoginService,
    RosefireAdapterService,
    RolesAdapterService,
    ActiveUsersService,
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
