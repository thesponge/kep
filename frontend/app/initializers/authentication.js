export default {
  name:       'authentication',
  after:      'simple-auth',
  initialize: function(container) {
    var applicationRoute = container.lookup('route:application');
    var session          = container.lookup('simple-auth-session:main');
    // handle the session events?
    session.on('sessionAuthenticationSucceeded', function() {
      applicationRoute.transitionTo('match.dashboard');
    });
  }
};
