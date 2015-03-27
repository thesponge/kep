import Ember from 'ember';

export default Ember.Route.extend({
  //model: function() {
  //  return this.store.find('job', 66);
  //},
  setupController: function(controller, model){
    controller.set('job', model)
  }
});

