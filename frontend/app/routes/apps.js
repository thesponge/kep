import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import ApplicationRouteMixin from 'ember-modals/mixins/routes/application';

export default Ember.Route.extend(AuthenticatedRouteMixin, ApplicationRouteMixin, {
  model: function() {
    return Ember.RSVP.hash({
      user: this.store.find('user', { email: window.session.content.email })
      //,
      //resources: this.store.find('resource')
    });
  }
});
