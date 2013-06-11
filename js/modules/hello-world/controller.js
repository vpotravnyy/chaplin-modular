define([
  'module',
  'base/controller',
  './models/hello-world',
  './views/hello-world'
], function(module, Controller, HelloWorldModel, HelloWorldView) {
  'use strict';

  var HelloWorldController = Controller.extend({
    index: function(params) {
      this.model = new HelloWorldModel();
      this.view = new HelloWorldView({model: this.model});
    }
  });

  return HelloWorldController;
});
