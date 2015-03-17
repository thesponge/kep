import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    sessionAuthenticationFailed: function(error) {
      this.controllerFor('application').set('loginErrorMessage', error.message);
    }
  },
  setupController: function(controller, model) {
    controller.set('loginErrorMessage', null);
  }
});
