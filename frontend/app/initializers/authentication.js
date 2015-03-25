import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default {
  name:       'authentication',
  after:      'simple-auth',
  initialize: function(container, application) {
    var applicationRoute = container.lookup('route:application');
    var session          = container.lookup('simple-auth-session:main');
    // handle the session events (handle o pula, nu merge)
    session.on('sessionAuthenticationSucceeded', function() {
      applicationRoute.transitionTo('match');
    });
  }
}
