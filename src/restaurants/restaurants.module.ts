import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dish } from './entities/dish.entity';
import { Restaurant } from './entities/restaurant.entity';
import { CategoryRepository } from './repositories/category.repository';
import { PaginationRepository } from './repositories/pagination.repository';
import {
  CategoryResolver,
  DishResolver,
  RestaurantResolver,
} from './restaurants.resolver';
import { RestaurantService } from './restaurants.service';

@Module({
  //import for injecting repository
  imports: [
    TypeOrmModule.forFeature([
      Restaurant,
      CategoryRepository,
      PaginationRepository,
      Dish,
    ]),
  ],
  providers: [
    RestaurantResolver,
    CategoryResolver,
    RestaurantService,
    DishResolver,
  ],
})
export class RestaurantsModule {}
