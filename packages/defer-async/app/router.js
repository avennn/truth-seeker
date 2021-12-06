'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/async_short', controller.home.asyncForShortHtmlParse);
  router.get('/async_long', controller.home.asyncForLongHtmlParse);
};
