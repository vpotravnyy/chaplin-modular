define([
  'module',
  'base/controller',
  './models/model',
  './views/view'
], function(module, Controller, Model, View) {
  'use strict';

  var DEFAULTController = Controller.extend({
    index: function(params) {
      this.model = new Model();
      this.view = new View({model: this.model});
    }
  });

  return DEFAULTController;
});
