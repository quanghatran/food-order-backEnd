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

  async getRatingDetailByOrderId(orderId: string): Promise<Object> {
    let result = await this.query(
      `select * from fn_getratingdetailbyorderid('${orderId}');`,
    );

    if (result.length > 0) {
      result = result[0];
    }

    return result;
  }

  async getAllOrders(pagenumber: number, pagesize: number): Promise<Object> {
    let result = { orders: [], total_count: 0 };

    result.orders = await this.query(
      `select * from fn_getallorders(${pagenumber}, ${pagesize});`,
    );

    let count = await this.query(`select count(*) from orders`);

    result.total_count = +count[0].count;

    return result;
  }

  async getNotificationByStore(account: string): Promise<Object> {
    let result = await this.query(
      `select id, message, created_at, status from notifications where "storeId"='${account}' order by created_at desc;`,
    );

    return result;
  }

  async getNotificationByUser(account: string): Promise<Object> {
    let result = await this.query(
      `select id, message, created_at, status from notifications where "userId"='${account}' order by created_at desc;`,
    );

    return result;
  }

  async updateNoti(notificationId: string): Promise<Object> {
    await this.query(
      `update notifications set status = 'seen' where "id"='${notificationId}'`,
    );

    return {
      message: 'update noti status successfully!!!',
    };
  }
}
