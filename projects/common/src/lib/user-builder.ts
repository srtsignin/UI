
import { User } from './user';

export class UserBuilder {

  private user: User;

  constructor() {
    this.user = new User();
  }

  token(t: string): UserBuilder {
    this.user.token = t;
    return this;
  }

  fullname(fn: string): UserBuilder {
    this.user.fullname = fn;
    return this;
  }

  roles(r: string[]): UserBuilder {
    this.user.roles = r;
    return this;
  }

  build(): User {
    return this.user;
  }

}
