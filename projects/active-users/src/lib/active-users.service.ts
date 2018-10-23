import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentSignInRequest, User } from '@srtsignin/common';

@Injectable()
export class ActiveUsersService {

  activeUsersUrl = 'https://srtsign.in/api/v1/active/activeUsers';

  constructor(private http: HttpClient) { }

  getActiveUsers(tutor: User): Observable<any> {
    return this.http.get(this.activeUsersUrl, {
      params: new HttpParams().set('roomId', 'percopo'),
      headers: new HttpHeaders().set('AuthToken', tutor.token)
    });
  }

  addUser (student: User, studentSignInRequest: StudentSignInRequest): Observable<any> {
    return this.http.post(this.activeUsersUrl, {
      params: new HttpParams().set('roomId', 'percopo'),
      headers: new HttpHeaders().set('AuthToken', student.token),
      body: JSON.stringify(studentSignInRequest)
    });
  }

  deleteUser(tutor: User, student: User): Observable<any> {
    return this.http.delete(this.activeUsersUrl, {
      params: new HttpParams().set('roomId', 'percopo').set('username', student.username),
      headers: new HttpHeaders().set('AuthToken', tutor.token)
    });
  }
}
