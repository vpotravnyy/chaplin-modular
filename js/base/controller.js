define([
  'module',
  'chaplin', 
  'site/views/site-view'
], function(module, Chaplin, SiteView) {
  'use strict';

  var Controller = Chaplin.Controller.extend({
    // Place your application-specific controller features here.
    beforeAction: function() {
      this.compose('site', SiteView);
    }
  });

  return Controller;
});
