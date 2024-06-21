import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CacheKey, CacheTTL } from '@nestjs/cache-manager';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @UseInterceptors(CacheInterceptor)
  @CacheKey('some_route')
  @CacheTTL(6000)
  @Get()
  async getHello(): Promise<string> {
    return this.appService.getHello();
  }
}
