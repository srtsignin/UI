import { Injectable } from '@angular/core';
import { UserBuilder } from '@srtsignin/common';
import { Rosefire } from 'rosefire-node';

@Injectable()
export class RosefireAdapterService {

  constructor() { }

  public signIn(): Promise<[UserBuilder, string]> {
    return new Promise((resolve, reject) => {
      Rosefire.signIn('ed282a1e-09d5-4511-a5ab-639280ea16fd', (err, user) => {
        if (err) {
          reject(err);
        }
        resolve([new UserBuilder().token(user.token).fullname(user.name), user.token]);
      });
    });
  }
}
