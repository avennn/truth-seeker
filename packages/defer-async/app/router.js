'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/async1', controller.home.asyncHFFS);
  router.get('/async2', controller.home.asyncHFSM);
  router.get('/async3', controller.home.asyncHSFF);
  router.get('/scripts/:scriptName', controller.home.script);
};
