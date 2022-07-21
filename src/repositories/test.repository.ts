import { EntityRepository, Repository } from 'typeorm';
import { Report, OrderDetail } from '../entities';

@EntityRepository(Report)
export class TestRepository extends Repository<Object> {
  constructor() {
    super();
  }

  async getFunctionResult(): Promise<Report> {
    return await this.query(`select * from fn_test();`);
  }

  async getOrderDetail(orderId: string): Promise<Object> {
    console.log(orderId);
    
    let result = await this.query(
      `select * from fn_GetOrderDetailByOrderId('${orderId}');`,
    );

    return result;
  }
}
