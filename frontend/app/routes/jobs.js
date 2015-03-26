import Ember from 'ember';

export default Ember.Route.extend({
  //model: function() {
  //  return Request.find();
  //}
  model: function() {
    return this.store.find('job')
      //,
      //user: this.store.find('user', { email: session.content.email })
      //,
      //requests: this.store.find('request')
  }
});
