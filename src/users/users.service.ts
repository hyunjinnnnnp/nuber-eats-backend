import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    //Inject typeORM repository
    @InjectRepository(User) private readonly users: Repository<User>,
  ) {}
}
