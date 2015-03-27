import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteJob: function() {
      this.get('model').destroyRecord().then(function() {
        this.transitionToRoute('match.dashboard');
      }.bind(this));
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
