import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private userRepo: UsersRepository) {}

  async createUser(params) {
    const { username, password } = params;

    const user = await this.userRepo.createUser({ data: {
      username,password
    } });

    return user
  }
}
