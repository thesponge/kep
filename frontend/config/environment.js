/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'kep-ember',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      emberDevTools: {global: true},
      'ember-cli-notifications': {
          includeFontAwesome: true
      },
    }
  };

  ENV['simple-auth'] = {
    authorizer: 'simple-auth-authorizer:devise',
    crossOriginWhitelist: ['*']
  };
  ENV['simple-auth-devise'] = {
    tokenAttributeName: 'token',
    identificationAttributeName: 'email',
    serverTokenEndpoint: ENV.APP.apiHost + '/users/sign_in'
  };
  ENV.contentSecurityPolicy = {
    'default-src': "'self'",
    'script-src': "'self' 'unsafe-eval' 'unsafe-inline' *",
    'font-src': "'self' http://fonts.gstatic.com",
    'connect-src': "'self' http://0.0.0.0:3000 https://api.mixpanel.com http://localhost:3000 http://localhost:35729",
    'img-src': "'self' *",
    'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com",
    'media-src': "'self'",
    'report-uri': "http://localhost:4200"
  }
  ENV.sassOptions = {
    //includePaths: [
      //'bower_components/foundation/scss'
    //]
  }

  if (environment === 'development') {
    ENV.APP.apiHost = 'http://localhost:3000';
    ENV.APP.apiNamespace = 'api/v1';
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'staging') {
    ENV.APP.apiHost = 'http://api.staging.kep.thesponge.eu';
    ENV.APP.apiNamespace = 'v1';

  }

  if (environment === 'production') {
    ENV.APP.apiHost = 'http://api.kep.thesponge.eu';
    ENV.APP.apiNamespace = 'v1';

  }

  return ENV;
};
