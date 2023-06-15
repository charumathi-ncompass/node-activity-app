import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  async fetchActivity(): Promise<any> {
    try {
      const response = await axios.get(
        'https://www.boredapi.com/api/activity'
      );
      const activity = response.data;
      return activity;
    } catch (error) {
      console.error('Error fetching activity data:', error.message);
      throw error;
    }
  }

  async fetchIp(): Promise<any> {
    try {
      const response = await axios.get(
        'https://api.ipify.org?format=json'
      );
      const ip = response.data;
      return ip;
    } catch (error) {
      console.error('Error fetching ip data:', error.message);
      throw error;
    }
  }

  getHello(): string {
    return 'Hello NestJS!';
  }
}

