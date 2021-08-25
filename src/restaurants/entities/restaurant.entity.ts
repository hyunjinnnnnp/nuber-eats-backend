import { Field, ObjectType } from '@nestjs/graphql';

//describes how are restaurant looks like on the graphql point
@ObjectType()
export class Restaurant {
  @Field((type) => String)
  name: string;

  @Field((type) => Boolean, { nullable: true })
  isGood?: boolean;
}
