define([
  'module',
  'chaplin',
  'base/model'
], function(module, Chaplin, Model) {
  'use strict';

  var DEFAULTModel = Model.extend({
    defaults: {
      message: 'Hello World!'
    },

    initialize: function(attributes, options) {
      Model.prototype.initialize.apply(this, arguments);
      
      //your code
    }

    
  });

  return DEFAULTModel;
});
