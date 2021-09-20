import { PAGINATION_NUMBER } from 'src/common/common.constants';
import { EntityRepository, Repository } from 'typeorm';
import { Restaurant } from '../entities/restaurant.entity';

@EntityRepository(Restaurant)
export class PaginationRepository extends Repository<Restaurant> {
  async search(page: number, where?: object) {
    const result = await this.findAndCount({
      where,
      take: PAGINATION_NUMBER,
      skip: (page - 1) * PAGINATION_NUMBER,
      order: {
        isPromoted: 'DESC',
      },
    });
    return result;
  }
}
