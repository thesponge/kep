import Ember from 'ember';

export default Ember.Route.extend({
  //model: function() {
  //  return this.store.find('assignment', 66); //this is random, I swear!
  //},
  //assignmenttypes: function() {
    //return this.store.find('assignment-type');
  //},
  setupController: function(controller, model){
    controller.set('assignment', model);
  },
  titleToken: 'Update assignment'
});

