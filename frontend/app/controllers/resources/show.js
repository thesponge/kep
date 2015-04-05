import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['match'],
  //newMatch: function() {
  //  return this.store.createRecord('match');
  //},
  actions: {
    deleteResource: function() {
      var self = this;
      var id = self.get('model').id;
      this.get('model').destroyRecord().then(function() {
        self.notifications.addNotification({
            message: 'Resource #' + id + ' deleted!',
            type: 'success',
            autoClear: true
        });
        this.transitionToRoute('match.dashboard');
      }.bind(this));
    },
    editResource: function() {
      var self = this;
      self.transitionToRoute('resources.edit', self.get('model'));
    },
  },
 setupController: function(controller, model) {
  //  model.reload();
    controller.set('model', model);
    //controller.set('isOwner', function(){
      //return this.model.user_id === user.id;
    //});
  }
});
