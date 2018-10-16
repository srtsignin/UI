import { Injectable } from '@angular/core';
import { BehaviorSubject, PartialObserver  } from 'rxjs';
import { getMatScrollStrategyAlreadyAttachedError } from '@angular/cdk/overlay/typings/scroll/scroll-strategy';
import { RosefireAdapterService } from '@srtsignin/rosefire-adapter';
import { UserBuilder, User } from '@srtsignin/common';
import { RolesAdapterService } from '@srtsignin/roles-adapter';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private signedIn: BehaviorSubject<Boolean> = new BehaviorSubject(false);
  private user: User;

  constructor(private rosefireAdapterService: RosefireAdapterService,
    private rolesAdapterService: RolesAdapterService,
    private router: Router) { }

  public login() {
    this.rosefireAdapterService.signIn().then(([userBuilder, rosefireToken]) => {
      return this.rolesAdapterService.populateRoles(userBuilder, rosefireToken);
    }).then((userBuilder: UserBuilder) => {
      this.user = userBuilder.build();
      this.signedIn.next(true);
      this.router.navigate(['/student']);
    });
  }

  public logout() {
    this.user = null;
    this.signedIn.next(false);
  }

  public subscribe(observer: PartialObserver<Boolean>) {
    this.signedIn.subscribe(observer);
  }

  public getFullName(): string {
    if (this.signedIn.getValue()) {
      return this.user.fullname;
    } else {
      throw new Error('Attempted to getFullName() when not logged in.');
    }
  }

  public isTutor() : boolean  {
    if (this.signedIn.getValue()) {
      return this.user.roles.includes("Tutor");
    } else {
      throw new Error('Attempted check isTutor() when not logged in.');
    }
  }

  public getUser() : User {
    if (this.signedIn.getValue()) {
      return this.user;
    } else {
      throw new Error('Attempted to getUser() when not logged in.');
    }
  }
}
