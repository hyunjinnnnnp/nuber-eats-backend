import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { createRestaurantDto } from './dtos/create-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantService } from './restuarants.service';

@Resolver((of) => Restaurant)
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantService) {}
  @Query((returns) => [Restaurant]) //graphQL
  restaurants(): Promise<Restaurant[]> {
    //typescript
    return this.restaurantService.getAll();
  }
  @Mutation((returns) => Boolean)
  createRestaurant(@Args() createRestaurantDto: createRestaurantDto): boolean {
    return true;
  }
}
//instead of these, use ArgsType! => create.restaurant.dto.ts
//createRestaurant():
// @Args('isVegan') isVegan: boolean,
// @Args('name') name: string,
// @Args('address') address: string,
// @Args('ownersName') ownersName: string
