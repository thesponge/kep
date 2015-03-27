import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteJob: function() {
      this.get('model').destroyRecord().then(function() {
        this.transitionToRoute('match.dashboard');
      }.bind(this));
    },
    editJob: function() {
      var self = this;
      self.transitionToRoute('jobs.edit', self.get('model'));
    }
  },
  //queryParams: {
  //  job_id: {
  //    refreshModel: true
  //  }
  //},
  //model: function(params) {
  //  this.store.find('job', params.job_id)
  //},
  setupController: function(controller, model) {
  //  model.reload();
    controller.set('model', model);
  }
});
