import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RolesResponse, UserBuilder } from '@srtsignin/common';

@Injectable()
export class RolesAdapterService {

  constructor(private http: HttpClient) { }

  public populateRoles(userBuilder: UserBuilder, rosefireToken: string): Promise<UserBuilder> {
    return new Promise((resolve, reject) => {
      this.getRoles(rosefireToken).subscribe((rolesResponse: RolesResponse) => {
       resolve(userBuilder.roles(rolesResponse.roles));
      }, reject);
    });
  }

  private getRoles(rosefireToken: string): Observable<RolesResponse> {
    return this.http.get<RolesResponse>('https://srtsign.in/api/role', {
      headers: new HttpHeaders({'RosefireToken': rosefireToken})
    });
  }

}
