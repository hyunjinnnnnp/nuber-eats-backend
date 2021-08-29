import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

//describes how are restaurant looks like on the graphql point
//@InputType({isAbstract: true})
//solution 2. we don't want this input type to go to the schema -extending~
@ObjectType() //for graphQL
@Entity() //for typeORM
export class Restaurant {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  id: number;

  @Field((type) => String) //for graphQL
  @Column() //for typeORM
  @IsString() //for dto validation
  @Length(5)
  name: string;

  @Field((type) => Boolean, { nullable: true })
  //{ defaultValue: true } DEFAULT VALUE for graphQL <-- (2)
  @Column({ default: true }) //for db
  @IsOptional() //for dto validation. --> cause of (2). automatically 'isVegan: true'
  @IsBoolean()
  isVegan?: boolean;

  @Field((type) => String, { defaultValue: '강남' })
  @Column()
  @IsString()
  address: string;
}
