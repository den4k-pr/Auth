import { PrismaService } from './prisma.service';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule],
  providers: [PrismaService]
})
export class AppModule {}
