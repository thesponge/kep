import Ember from 'ember';
import UnauthenticatedRouteMixin from 'simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  actions: {
    sessionAuthenticationFailed: function(error) {
      //controller.set('loginErrorMessage', error.message);
      this.notifications.addNotification({
          message: error.errors[0],
          type: 'error',
          autoClear: false
      });
    }
  }
});
