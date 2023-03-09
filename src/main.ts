import { PrismaService } from './prisma.service';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app)

  app.setGlobalPrefix('api') // глобальний префікс який використовується в АРІ
  app.enableCors() // це для кращой роботи з фронтом но краще погугли
  await app.listen(4200);
}
bootstrap();
