import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'New request',
  model: function() {
    return this.store.createRecord('request');
  },
  setupController: function(controller, model){
    controller.set('newRequest', model);
  }
});
