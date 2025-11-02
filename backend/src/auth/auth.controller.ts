import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './create-user.dto';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() body: CreateUserDto) {
    try {
      return await this.authService.register(body.name, body.email, body.password);
    } catch (error) {
      // Return error message instead of generic 500
      return { status: 'error', message: error.message };
    }
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    try {
      return await this.authService.login(body.email, body.password);
    } catch (error) {
      return { status: 'error', message: error.message };
    }
  }
}


