import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '@srtsignin/common';
import { API_URL } from '@srtsignin/api';

@Injectable()
export class CoursesService {

  private API_URL;
  private activeUrl = '/active';

  constructor(private http: HttpClient, @Inject(API_URL) url: string) {
    this.API_URL = url;
  }

  getCourses(search: string): Observable<any> {
    const options = search ?
      { params: new HttpParams().set('search', search) } :
      { params: new HttpParams().set('search', '')};
    return this.http.get(this.API_URL + this.activeUrl + '/course', options);
  }

  getClasses(user: User): Observable<any> {
    return this.http.get(this.API_URL + this.activeUrl + '/classes', {
      headers: new HttpHeaders({'StudentToken': user.token}) });
  }
}
