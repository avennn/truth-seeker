'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = await ctx.renderView('index');
  }
  async asyncForShortHtmlParse() {
    const { ctx } = this;
    ctx.body = await ctx.renderView('asyncForShortHtmlParse');
  }
  async asyncForLongHtmlParse() {
    const { ctx } = this;
    const arr = [];
    for (let i = 0; i < 10000; i++) {
      arr.push(i);
    }
    ctx.body = await ctx.renderView('asyncForLongHtmlParse', { arr });
  }
}

module.exports = HomeController;
