import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteResource: function() {
      this.get('model').destroyRecord().then(function() {
        this.transitionToRoute('match.dashboard');
      }.bind(this));
    },
    editResource: function() {
      var self = this;
      self.transitionToRoute('resources.edit', self.get('model'));
    }
  },
 setupController: function(controller, model) {
  //  model.reload();
    controller.set('model', model);
  }
});
