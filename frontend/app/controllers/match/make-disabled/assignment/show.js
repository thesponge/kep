import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteAssignment: function() {
      this.get('model').destroyRecord().then(function() {
        this.transitionToRoute('match.dashboard');
      }.bind(this));
    },
    editAssignment: function() {
      var self = this;
      self.transitionToRoute('assignments.edit', self.get('model'));
    }
  },
 setupController: function(controller, model) {
  //  model.reload();
    controller.set('model', model);
  }
});
