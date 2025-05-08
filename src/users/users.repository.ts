import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService){

  }


  async createUser(params) {
    const { data } = params;
    return this.prisma.user.create({ data });
  }
}
