import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtService } from 'src/jwt/jwt.service';
import { User } from './entities/user.entity';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  //import for injecting repository
  //글로벌로 설정되어있는 모듈은 imports할 필요 없음
  imports: [TypeOrmModule.forFeature([User])],
  //ConfigService: ConfigModule for using .env in nestJS's way
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
