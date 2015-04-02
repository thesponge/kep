import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

//import {ApplicationRouteMixin as SimpleAuthApplicationRouteMixin} from 'simple-auth/mixins/application-route-mixin';
//import {ApplicationRouteMixin as EmberModalsApplicationRouteMixin} from 'ember-modals/mixins/routes/application';
//
//
//export default Ember.Route.extend(SimpleAuthApplicationRouteMixin, EmberModalsApplicationRouteMixin, {

export default Ember.Route.extend(ApplicationRouteMixin, {
  title: function(tokens) {
    return tokens.join(' - ') + ' :: Knowledge Exchange Platform';
  },
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
