import { v4 as uuidv4 } from 'uuid';
import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';
import { BeforeInsert, Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { User } from './user.entity';

@InputType({ isAbstract: true })
@ObjectType()
@Entity()
export class Verification extends CoreEntity {
  //id, createdAt, updatedAt
  @Column()
  @Field((type) => String)
  code: string;

  @OneToOne((type) => User)
  @JoinColumn()
  user: User;

  @BeforeInsert()
  //when user creates account & edit profile
  createCode(): void {
    this.code = uuidv4(); //create random string
  }
}
