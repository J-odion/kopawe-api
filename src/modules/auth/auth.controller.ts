import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Login with Call-up Number' })
  async login(@Body('callUpNumber') callUpNumber: string) {
    return this.authService.login(callUpNumber);
  }

  @Post('register')
  @ApiOperation({ summary: 'Register and verify NYSC member' })
  async register(@Body() data: any) {
    return this.authService.register(data);
  }
}
