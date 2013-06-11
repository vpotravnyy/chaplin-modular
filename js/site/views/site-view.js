define([
  'module',
  'base/view', 
  'text!site/templates/site-view.hbs'
], function(module, View, template) {
  'use strict';

  var SiteView = View.extend({
    uri: module.uri,
    container: 'body',
    id: 'site-container',
    regions: {
      '#main-container': 'main'
    },
    template: template
  });

  return SiteView;
});
