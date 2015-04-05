import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'New resource',
  model: function() {
    return this.store.createRecord('resource');
  },
  setupController: function(controller, model){
    controller.set('newResource', model);
  }
});
