import { refreshToken } from './dto/refresh-token.dto';
import { AuthDto } from './auth.dto';
import { Controller, Body } from '@nestjs/common';
import { HttpCode } from '@nestjs/common/decorators/http/http-code.decorator';
import { Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { AuthService } from './auth.service';
import { UsePipes } from '@nestjs/common/decorators';
import { ValidationPipe } from '@nestjs/common/pipes';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200) // перезаписується порт бо 201 може погано працювати з фронтом
  @Post('login')
  async login(@Body() dto: AuthDto) {
    return this.authService.login(dto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200) // перезаписується порт бо 201 може погано працювати з фронтом
  @Post('login/access-token')
  async getNewTokens(@Body() dto: refreshToken) {
    return this.authService.getNewTokens(dto.refreshToken)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200) // перезаписується порт бо 201 може погано працювати з фронтом
  @Post('register')
  async register(@Body() dto: AuthDto) {
    return this.authService.register(dto)
  }
}
