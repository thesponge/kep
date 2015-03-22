import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  //model: function() {
  //  return Request.find();
  //}
  model: function() {
    return Ember.RSVP.hash({
      jobs: this.store.find('job')
      //,
      //requests: this.store.find('request')
    });
  }
});

