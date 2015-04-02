import Ember from 'ember';

export default Ember.Route.extend({
  //model: function() {
  //  return this.store.find('job', 66); //this is random, I swear!
  //},
  setupController: function(controller, model){
    controller.set('job', model);
  },
  titleToken: 'Update job'
});

