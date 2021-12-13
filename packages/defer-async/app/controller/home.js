'use strict';

const fs = require('fs');
const path = require('path');
const Controller = require('egg').Controller;
const { sleep } = require('tori');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = await ctx.renderView('index');
  }
  async asyncHFFS() {
    const { ctx } = this;
    const arr = [];
    for (let i = 0; i < 10000; i++) {
      arr.push(i);
    }
    ctx.body = await ctx.renderView('asyncHFFS', { arr });
  }
  async asyncHFSM() {
    const { ctx } = this;
    const arr = [];
    for (let i = 0; i < 5000; i++) {
      arr.push(i);
    }
    ctx.body = await ctx.renderView('asyncHFSM', { arr });
  }
  async asyncHSFF() {
    const { ctx } = this;
    ctx.body = await ctx.renderView('asyncHSFF');
  }
  async asyncForLongHtmlParse() {
    const { ctx } = this;
    const arr = [];
    for (let i = 0; i < 10000; i++) {
      arr.push(i);
    }
    ctx.body = await ctx.renderView('asyncForLongHtmlParse', { arr });
  }
  async script() {
    const { ctx } = this;
    const { scriptName } = ctx.params;
    const { t } = ctx.query;
    const delay = Number(t);
    if (delay) {
      await sleep(delay);
    }
    ctx.set('Content-Type', 'application/javascript');
    ctx.body = fs.readFileSync(path.resolve('./app/scripts/', scriptName), {
      encoding: 'utf-8',
    });
  }
}

module.exports = HomeController;
