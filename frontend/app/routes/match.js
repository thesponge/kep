import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  actions: {
    setError: function(message) {
      this.set('matchErrorMessage', message);
      console.log('matchErrorMessage' + message);
      this.controllerFor('match').set('matchErrorMessage', message);
    }
  }
});
