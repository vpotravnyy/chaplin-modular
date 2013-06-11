define([
  'module',
  'chaplin',
  'base/model'
], function(module, Chaplin, Model) {
  'use strict';

  var Collection = Chaplin.Collection.extend({
    model: Model
    // Place your application-specific collection features here
  });

  return Collection;
});
