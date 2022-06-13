import { Controller, Get } from '@nestjs/common';

@Controller()
export class IndexController {

  @Get()
  index() {
    return {
      app: 'Nest Boilerplate is running...'
    };
  }
}