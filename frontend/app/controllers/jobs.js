import Ember from 'ember';

export default Ember.Controller.extend({
  //job: function() {
  //  return this.store.createRecord('job');
  //}.property(),
  //actions: {
  //  deleteJob: function() {
  //    this.get('model').destroyRecord().then(function() {
  //      this.transitionToRoute('match.dashboard');
  //    }.bind(this));
  //  },
  //  submitJob: function() {
  //    console.log("Title: ", this.get('job.title'));
  //    console.log("Description: ", this.get('job.description'));
  //    console.log("Travel: ", this.get('job.travel'));
  //    console.log("Driving license: ", this.get('job.driver_license'));
  //    console.log("Tech: ", this.get('tech'));
  //    var self = this;
  //    this.get('job').save().then(function() {
  //      //this.get('jobs').pushObject(self.get('job'));
  //      self.transitionToRoute('jobs.show', self.get('job'));
  //    });
  //  }
  //}
  //queryParams: {
  //  job_id: {
  //    refreshModel: true
  //  }
  //},
  model: function() {
    return this.store.find('job');
  }.property(),
  //setupController: function(controller, model) {
  //  model.reload();
  //  controller.set('model', model);
  //}
});

