import {
  Body,
  Controller,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { AuthService } from './auth.service'
import { SignUpDto } from './dto/sign-up.dto'
import { User } from '../user/schema/user.schema'
import { SignInDto } from './dto/sign-in.dto'
import { UserResponse } from './dto/user.response'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('register')
  public async register(@Body() dto: SignUpDto): Promise<UserResponse> {
    return this.authService.signUp(dto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('login')
  public async login(@Body() dto: SignInDto): Promise<UserResponse> {
    return this.authService.signIn(dto)
  }
}
