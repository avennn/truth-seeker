'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  // important vs style
  async index() {
    const { ctx } = this;
    await ctx.render('index.nj');
  }
  // important vs style
  async index1() {
    const { ctx } = this;
    const n = 1000;
    const cList = [];
    for (let i = 0; i < n; i++) {
      const cName = `c${i + 1}`;
      cList.push(cName);
    }
    await ctx.render('index1.nj', {
      classStr: cList.join(' '),
      style: cList.map((item) => '.' + item).join(''),
    });
  }
  // animation override normal rules
  async index2() {
    const { ctx } = this;
    await ctx.render('index2.nj');
  }
  // user-agent, user, author style
  async index3() {
    const { ctx } = this;
    await ctx.render('index3.nj');
  }
  // transition覆盖important
  async index4() {
    const { ctx } = this;
    await ctx.render('index4.nj');
  }
  // 样式定义远近
  async index5() {
    const { ctx } = this;
    await ctx.render('index5.nj');
  }
  // media type
  async index6() {
    const { ctx } = this;
    await ctx.render('index6.nj');
  }
  // 加载顺序
  async index7() {
    const { ctx } = this;
    await ctx.render('index7.nj');
  }
}

module.exports = HomeController;
