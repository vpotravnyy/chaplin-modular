define([
  'module',
  'base/view',
  'text!../templates/template.hbs',
  'css!../css/styles'
], function(module, View, template) {
  'use strict';

  var DEFAULTView = View.extend({
    uri: module.uri
    // Automatically render after initialize
    autoRender: true,

    className: 'hello-world',

    // Automatically append to the DOM on render
    region: 'main',

    // Save the template string in a prototype property.
    // This is overwritten with the compiled template function.
    // In the end you might want to used precompiled templates.
    template: template
  });

  return DEFAULTView;
});
