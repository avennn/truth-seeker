'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/index1', controller.home.index1);
  router.get('/index2', controller.home.index2);
  router.get('/index3', controller.home.index3);
  router.get('/index4', controller.home.index4);
  router.get('/index5', controller.home.index5);
  router.get('/index6', controller.home.index6);
  router.get('/index7', controller.home.index7);
};
