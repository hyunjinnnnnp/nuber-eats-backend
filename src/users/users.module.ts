import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Verification } from './entities/verification.entity';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  //import for injecting repository
  //글로벌로 설정되어있는 모듈은 imports할 필요 없음
  imports: [TypeOrmModule.forFeature([User, Verification])],
  providers: [UsersResolver, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
