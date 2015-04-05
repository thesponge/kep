import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['match'],
  match: null,
  actions: {
    deleteAssignment: function() {
      var self = this;
      var id = self.get('model').id;
      this.get('model').destroyRecord().then(function() {
        self.notifications.addNotification({
            message: 'Assignment #' + id + ' deleted!',
            type: 'success',
            autoClear: true
        });
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
    //controller.set('isOwner', function(){
      //return this.model.user_id === user.id;
    //});
  }
});
