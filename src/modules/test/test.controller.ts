import { TestService } from './test.service';
import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Test')
@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get('/')
  getTests() {
    return this.testService.getTests();
  }

  @Get('/report')
  async getFunctionResults() {
    return this.testService.getFunctionResult();
  }

  @Get('/order/detail/:orderId')
  async getOrderDetail(@Param('orderId') orderId: string) {
    return this.testService.getOrderDetail(orderId);
  }
}
