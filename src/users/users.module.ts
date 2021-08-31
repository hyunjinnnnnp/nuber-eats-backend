import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  //import for injecting repository
  imports: [TypeOrmModule.forFeature([User]), ConfigService],
  //ConfigService: ConfigModule for using .env in nestJS's way
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
