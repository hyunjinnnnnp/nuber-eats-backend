import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { createRestaurantDto } from './dtos/create-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';

@Resolver((of) => Restaurant)
export class RestaurantResolver {
  @Query((returns) => [Restaurant]) //graphQL
  restaurants(@Args('veganOnly') veganOnly: boolean): Restaurant[] {
    //typescript
    return [];
  }
  @Mutation((returns) => Boolean)
  createRestaurant(@Args() createRestaurantDto: createRestaurantDto): boolean {
    console.log(createRestaurantDto);
    return true;
  }
}
//instead of these, use ArgsType! => create.restaurant.dto.ts
//createRestaurant():
// @Args('isVegan') isVegan: boolean,
// @Args('name') name: string,
// @Args('address') address: string,
// @Args('ownersName') ownersName: string
