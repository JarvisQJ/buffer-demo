'use strict';

const Controller = require('egg').Controller;
const excelInfo = require('../../config/excel');

class OperateController extends Controller {

  async userList() {
    const {ctx, service} = this;

    ctx.validate({
      is_export: 'int',
      pageIndex: 'int',
      pageSize: 'int'
    }, ctx.query);

    const result = await service.user.findUser();
    if (ctx.query.is_export) {
      ctx.body = await ctx.helper.buildExcel(result.rows, excelInfo.purchaseSelect.columns);
    } else {
      ctx.body = result;
    }
  }


}

module.exports = OperateController;
