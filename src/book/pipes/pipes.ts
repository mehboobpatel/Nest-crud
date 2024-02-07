import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Book } from '../data/book.dto';
//check the bool.dto file it should have @IsInt() decrorts
import { validate } from 'class-validator';

@Injectable()
export class BookPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    // Convert object to class using class-transformer
    const bookClass = plainToInstance(Book, value);
    console.log('Transformed object:', bookClass);

    // Class validation on the transformed object
    const errors = await validate(bookClass);

    if (errors.length > 0) {

        console.log('\x1b[31mValidation Failed:\x1b[0m', errors); // Red color for error
      throw new BadRequestException(
        'Validation Failed' + JSON.stringify(errors),
      );
    } else {

      console.log('\x1b[32mValidation Succeeded\x1b[0m'); // Green color for success            return value;
    }

    //if the throw lines get executed(i.e error generts the below code wont execute)
    console.log(value, typeof(value));
    return value;
  }
}
