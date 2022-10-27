'use strict';
module.exports = function (app) {
  var productsCtrl = require('./controllers/ProductsController');
  var usersCtrl = require('./controllers/UsersController');
  // todoList Routes
  app.route('/products')
    .get(productsCtrl.get)
    .post(productsCtrl.store);


  app.route('/products/:productId')
    .get(productsCtrl.detail)
    .put(productsCtrl.update)
    .delete(productsCtrl.delete);

  app.route('/users')
    .get(usersCtrl.get)
};
