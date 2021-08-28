import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantsModule } from './restaurants/restaurants.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    RestaurantsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'jini',
      password: '12345', //localhost경우 필요없음
      database: 'nuber-eats',
      synchronize: true, //true: TypeORM이 데이터베이스에 연결할 때 데이터베이스를 내 모듈의 현재상태로 마이그래이션한다
      logging: true, //데이터베이스 상태 콘솔출력
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
