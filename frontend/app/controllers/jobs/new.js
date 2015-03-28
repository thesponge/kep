import Ember from 'ember';

export default Ember.Controller.extend({
  //job: function() {
  //  return this.store.createRecord('job');
  //}.property(),
  newJob: null,
  actions: {
    submitJob: function() {
      console.log("Title: ", this.get('newJob.title'));
      console.log("Description: ", this.get('newJob.description'));
      console.log("Travel: ", this.get('newJob.travel'));
      console.log("Driving license: ", this.get('newJob.driver_license'));
      var self = this;
      self.get('newJob').save().then(function(job) {
        //this.get('jobs').pushObject(self.get('job'));
        self.transitionToRoute('jobs.show', self.get('newJob'));
      });
    }
  }
});
