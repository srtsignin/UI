import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentSignInRequest } from '@srtsignin/common';
@Injectable(
  // {
  // providedIn: 'root'
// }
)
export class ActiveUsersService {

  activeUsersUrl = 'https://srtsign.in/api/active-users';

  constructor(private http: HttpClient) { }

  getActiveUsers(): Observable<any> {
    return this.http.get(this.activeUsersUrl);
  }

  addUser (studentSignInRequest: StudentSignInRequest): Observable<any> {
    return this.http.post(this.activeUsersUrl, JSON.stringify(studentSignInRequest));
  }

  clearActiveUsers(): Observable<any> {
    return this.http.delete(this.activeUsersUrl);
  }
}
