import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Request, Response, NextFunction } from 'express';

function globalmiddlewareone(req: Request,res: Response,next: NextFunction){
  console.log("global middleware integrated");
  next()
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalmiddlewareone)
  await app.listen(3000);
}
bootstrap();
