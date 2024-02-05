import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { BookService } from './book/book.service';

@Module({
  imports: [BookModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
