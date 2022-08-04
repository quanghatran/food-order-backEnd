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

  async getOrderReportByAdmin(month: number) {
    return this.testRepository.getOrderReportByAdmin(month);
  }

  async getOrderReportByStore(month: number, account: string) {
    return this.testRepository.getOrderReportByStore(month, account);
  }

  async getRatingDetailByOrderId(orderId: string) {
    return this.testRepository.getRatingDetailByOrderId(orderId);
  }

  async getAllOrders(pagenumber: number, pagesize: number) {
    return this.testRepository.getAllOrders(pagenumber, pagesize);
  }

  async getNotificationByStore(account: string) {
    return this.testRepository.getNotificationByStore(account);
  }
}
