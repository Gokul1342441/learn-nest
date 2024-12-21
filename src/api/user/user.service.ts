import { Injectable, NotFoundException } from '@nestjs/common';
import { user } from './interface/user';

@Injectable()
export class UserService {
  public users: user[] = [];

  getUsers(): user[] {
    if (this.users && Array.isArray(this.users) && this.users.length) {
      return this.users;
    } else {
      throw new NotFoundException('User is not Found!!!!!');
    }
  }

  getUser(email: string): user {
    const userData = this.users.filter((i) => i.email === email);
    if (userData && Array.isArray(userData) && userData.length > 0) {
      return userData[0];
    }
    throw new NotFoundException('User is not found!');
  }

  addUser(user: user): user {
    this.users.push(user);
    return user;
  }

  deleteUser(email: string): user[] {
    const remaining_users = this.users.filter((i) => i.email !== email);
    if (
      remaining_users &&
      Array.isArray(remaining_users) &&
      remaining_users.length > 0
    ) {
      this.users = remaining_users;
      return remaining_users;
    }
    throw new NotFoundException(
      'There is not users are there to you delete this --:)',
    );
  }
}
