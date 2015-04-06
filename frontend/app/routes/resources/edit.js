import Ember from 'ember';
import DirtyConfirmRouteMixin from 'ember-cli-dirty-confirm/mixins/dirty-confirm-route';

export default Ember.Route.extend(DirtyConfirmRouteMixin, {
  setupController: function(controller, model){
    controller.set('resource', model);
  },
  titleToken: 'Update resource'
});

