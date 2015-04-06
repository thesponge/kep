import Ember from 'ember';
import DirtyConfirmRouteMixin from 'ember-cli-dirty-confirm/mixins/dirty-confirm-route';


export default Ember.Route.extend(DirtyConfirmRouteMixin, {
  titleToken: 'New assignment',
  model: function() {
    return this.store.createRecord('assignment');
  },
  setupController: function(controller, model){
    controller.set('newAssignment', model);
  }
});
