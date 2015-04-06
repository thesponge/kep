import Ember from 'ember';
import DirtyConfirmRouteMixin from 'ember-cli-dirty-confirm/mixins/dirty-confirm-route';


export default Ember.Route.extend(DirtyConfirmRouteMixin, {
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

