import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return Ember.RSVP.hash({
      user: this.store.find('user', { email: window.session.content.email })
      //,
      //requests: this.store.find('request')
    });
  }
});
