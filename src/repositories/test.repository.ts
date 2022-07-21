import { EntityRepository, Repository } from 'typeorm';
import { Test } from '../entities';

@EntityRepository(Test)
export class TestRepository extends Repository<Object> {
  constructor() {
    super();
  }

  async getFunctionResult(): Promise<Object> {
    return await this.query(`select * from fn_test();`);
  }

  async getOrderDetail(orderId: string): Promise<Object> {
    return await this.query(
      `select * from fn_GetOrderDetailByOrderId('${orderId}');`,
    );
  }

  async getOrderReportByAdmin(month: number): Promise<Object> {
    let order = await this.query(
      `select * from fn_getreportorders(${month}, 'admin');`,
    );

    let revenue = await this.query(
      `select * from fn_GetRevenueByMonth(${month}, 'admin');`,
    );

    let new_product = await this.query(
      `select * from fn_GetNewProductByMonth(${month}, 'admin');`,
    );

    return {
      order: order,
      revenue: +revenue[0]['fn_getrevenuebymonth'],
      new_product: +new_product[0]['fn_getnewproductbymonth'],
    };
  }

  async getOrderReportByStore(month: number, account: string): Promise<Object> {
    let order = await this.query(
      `select * from fn_getreportorders(${month}, '${account}');`,
    );
    let revenue = await this.query(
      `select * from fn_GetRevenueByMonth(${month}, '${account}');`,
    );
    let new_product = await this.query(
      `select * from fn_GetNewProductByMonth(${month}, '${account}');`,
    );

    return {
      order: order,
      revenue: +revenue[0]['fn_getrevenuebymonth'],
      new_product: +new_product[0]['fn_getnewproductbymonth'],
    };
  }
}
