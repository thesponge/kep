import Ember from 'ember';


export default Ember.Controller.extend({
  queryParams: ['user_id'],
  user_id: null,
  setupController: function(controller, model) {
    controller.set('model', model);
  }
});
