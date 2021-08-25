import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class RestaurantResolver {
  @Query((returns) => Boolean)
  // for GraphQL
  isPizzaGood(): boolean {
    // for typescript
    return true;
  }
}
