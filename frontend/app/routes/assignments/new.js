import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'New assignment',
  model: function() {
    return this.store.createRecord('assignment');
  },
  setupController: function(controller, model){
    controller.set('newAssignment', model);
  }
});
