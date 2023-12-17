Package.describe({
  name: 'maka:rest',
  summary: 'Create authenticated REST APIs in Meteor 2.13+ via HTTP/HTTPS',
  version: '3.0.0',
  git: 'https://github.com/maka-io/maka-rest.git'
});

Npm.depends({
  'yamljs': '0.3.0',
  'limiter': '2.1.0',
  '@types/meteor': '2.9.7',
  'express': '4.18.2',
  '@types/express': '4.17.21',
  'http-status-codes': '2.3.0',

});

Package.onUse(function (api) {
  // Minimum Meteor version
  api.versionsFrom(['2.13', '3.0-alpha.19']);

  // Meteor dependencies
  api.use('check');
  api.use('underscore');
  api.use('ecmascript');
  api.use('accounts-password');
  api.use('simple:json-routes@2.3.1');
  api.use('typescript');
  api.use('alanning:roles');

  //api.addFiles('lib/auth.js', 'server');
  //api.addFiles('lib/route.js', 'server');
  //api.addFiles('lib/restivus.js', 'server');
  // api.addFiles('lib/restivus-swagger.js', 'server');

  // Exports
  //api.export('Restivus', 'server');
  api.mainModule('lib/restivus.ts', 'server');
});

Package.onTest(function (api) {

});
