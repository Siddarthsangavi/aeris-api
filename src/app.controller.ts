import { Controller, Get } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection, ConnectionStates } from 'mongoose';

@Controller()
export class AppController {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  @Get()
  getRoot() {
    const status =
      this.connection.readyState === ConnectionStates.connected
        ? 'connected'
        : 'not connected';
    return `Aeris API is running 🚀 | MongoDB status: ${status}`;
  }
}
