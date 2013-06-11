define([
  'module',
  'base/view',
  'text!../templates/hello-world.hbs',
  'css!../css/hello-world'
], function(module, View, template) {

  var HelloWorldView = View.extend({
    uri: module.uri,
    // Automatically render after initialize
    autoRender: true,
    id: 'hello-world',
    region: 'main',
    template: template,
  });

  return HelloWorldView;
});
