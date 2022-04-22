import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const version = process.env.MSG || 'Last update 21-abr-2022'; 
    const msg = process.env.MSG || 'wow it works';
    return `Hello World From NestJS! - ${msg} - ${version}`;
  }
}
