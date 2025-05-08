import { Module } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { PrismaModule } from 'src/database/prisma.module';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [PrismaModule],
  providers: [UsersRepository, UsersService],
  exports:[UsersService],
  controllers: [UsersController]
})

export class UsersModule {}
