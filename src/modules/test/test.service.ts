import { Injectable } from '@nestjs/common';
import { TestRepository } from '../../repositories';

@Injectable()
export class TestService {
  constructor(private readonly testRepository: TestRepository) {}

  async getTests() {
    return { message: 'hello world' };
  }

  async getFunctionResult() {
    return this.testRepository.getFunctionResult();
  }

  async getOrderDetail(orderId: string) {
    return this.testRepository.getOrderDetail(orderId);
  }

}
