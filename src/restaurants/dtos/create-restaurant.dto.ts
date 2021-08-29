import { InputType, OmitType } from '@nestjs/graphql';
import { Restaurant } from '../entities/restaurant.entity';

//Restaurant는 ObjectType. must be InputType
@InputType()
export class createRestaurantDto extends OmitType(
  Restaurant,
  ['id'],
  //solution 1. InputType
  InputType,
) {}

//all the validations goes --> restaurant.entity.ts
