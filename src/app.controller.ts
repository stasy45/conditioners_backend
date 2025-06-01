import { InternalServerErrorException, Controller, Get, ConflictException } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('server_error')
  async getServerError(): Promise<InternalServerErrorException> {
    throw new InternalServerErrorException('You got 500');
  }

  @Get('conflict')
  async getConflictError(): Promise<ConflictException> {
    throw new ConflictException('You got 409');
  }
}
