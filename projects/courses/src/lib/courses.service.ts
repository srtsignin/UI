import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '@srtsignin/common';

@Injectable()
export class CoursesService {

  activeURL = 'https://srtsign.in/api/active';
  
  constructor(private http: HttpClient) { }

  getCourses(search : string): Observable<any> {
    const options = search ?
      { params: new HttpParams().set('search', search) } : 
      { params: new HttpParams().set('search', '')};
    return this.http.get(this.activeURL + "/courses", options);
  }

  getClasses(user : User): Observable<any> {
    return this.http.get(this.activeURL + "/classes", { 
      headers: new HttpHeaders({'StudentToken': user.token}) });
  }
}
