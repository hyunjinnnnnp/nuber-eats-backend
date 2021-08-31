import { InputType, ObjectType, PartialType, PickType } from '@nestjs/graphql';
import { coreOutput } from 'src/common/dtos/output.dto';
import { User } from '../entities/user.entity';

@ObjectType()
export class EditProfileOutput extends coreOutput {}

@InputType()
export class EditProfileInput extends PartialType(
  PickType(User, ['email', 'password']),
) {
  //email, password를 optional하게만들기 PartialType!!
}
