import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';


export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
      error: function(transition, error) {
          this.render('error', {
              controller: error, 
              into: 'application'
          });
      }
  }
});
