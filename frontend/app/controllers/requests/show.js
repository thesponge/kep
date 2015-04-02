import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['match'],
  match: null,
  actions: {
    deleteRequest: function() {
      this.get('model').destroyRecord().then(function() {
        this.transitionToRoute('match.dashboard');
      }.bind(this));
    },
    editRequest: function() {
      var self = this;
      self.transitionToRoute('requests.edit', self.get('model'));
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
