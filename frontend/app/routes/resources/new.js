import Ember from 'ember';
import DirtyConfirmRouteMixin from 'ember-cli-dirty-confirm/mixins/dirty-confirm-route';

export default Ember.Route.extend(DirtyConfirmRouteMixin, {
  titleToken: 'New resource',
  model: function() {
    return this.store.createRecord('resource');
  },
  setupController: function(controller, model){
    controller.set('newResource', model);
  }
});
