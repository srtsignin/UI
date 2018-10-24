import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentSignInRequest, User } from '@srtsignin/common';
import { API_URL } from '@srtsignin/api';

@Injectable()
export class ActiveUsersService {

  private API_URL;
  private activeUsersUrl = '/active/activeUsers';

  constructor(private http: HttpClient, @Inject(API_URL) url: string) {
    this.API_URL = url;
  }

  getActiveUsers(tutor: User): Observable<any> {
    return this.http.get(this.API_URL + this.activeUsersUrl, {
      params: new HttpParams().set('roomId', 'percopo'),
      headers: new HttpHeaders().set('AuthToken', tutor.token)
    });
  }

  addUser (student: User, studentSignInRequest: StudentSignInRequest): Observable<any> {
    return this.http.post(this.API_URL + this.activeUsersUrl, {
      params: new HttpParams().set('roomId', 'percopo'),
      headers: new HttpHeaders().set('AuthToken', student.token),
      body: JSON.stringify(studentSignInRequest)
    });
  }

  deleteUser(tutor: User, student: User): Observable<any> {
    return this.http.delete(this.API_URL + this.activeUsersUrl, {
      params: new HttpParams().set('roomId', 'percopo').set('username', student.username),
      headers: new HttpHeaders().set('AuthToken', tutor.token)
    });
  }
}
