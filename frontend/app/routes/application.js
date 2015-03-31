import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';


export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
      error: function(transition, error) {
          this.notifications.addNotification({
              message: error.errors[0],
              type: 'error',
              autoclear: false
          });
      }
  }
});
