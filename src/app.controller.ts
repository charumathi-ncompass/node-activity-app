// import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get()
//   getHello(): string {
//     return this.appService.getHello();
//   }
// }

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/activity')
  async getActivity(): Promise<any> {
    try {
      const activityData = await this.appService.fetchActivity();
      return activityData;
    } catch (error) {
      console.error('An error occurred:', error.message);
      throw error;
    }
  }

  @Get('/ip')
  async getIp(): Promise<any> {
    try {
      const ipData = await this.appService.fetchIp();
      return ipData;
    } catch (error) {
      console.error('An error occurred:', error.message);
      throw error;
    }
  }
}

