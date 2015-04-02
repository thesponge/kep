import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'New job',
  model: function() {
    return this.store.createRecord('job');
  },
  setupController: function(controller, model){
    controller.set('newJob', model);
  }
});
