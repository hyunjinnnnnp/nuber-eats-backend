import { EntityRepository, Repository } from 'typeorm';
import { Restaurant } from '../entities/restaurant.entity';

@EntityRepository(Restaurant)
export class PaginationRepository extends Repository<Restaurant> {
  async search(page: number, where?: object) {
    const result = await this.findAndCount({
      where,
      take: 20,
      skip: (page - 1) * 20,
    });
    return result;
  }
}
