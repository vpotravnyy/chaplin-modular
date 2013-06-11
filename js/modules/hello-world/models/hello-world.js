define([
  'module',
  'chaplin',
  'base/model'
], function(module, Chaplin, Model) {
  'use strict';

  var HelloWorld = Model.extend({
    defaults: {
      message: 'Hello World!'
    }

    // ,initialize: function(attributes, options) {
    //  Model.prototype.initialize.apply(this, arguments);
    //  console.debug('HelloWorld#initialize');
    // }
  });

  return HelloWorld;
});
