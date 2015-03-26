import Ember from 'ember';

export default Ember.Controller.extend({
  job: function() {
    return this.store.find('job', job_id);
  }.property(),
  actions: {
    updateJob: function() {
      console.log("Title: ", this.get('job.title'));
      this.set('job.title');
      console.log("Description: ", this.get('job.description'));
      this.set('job.description');
      console.log("Travel: ", this.get('job.travel'));
      this.set('job.travel');
      console.log("Driving license: ", this.get('job.driver_license'));
      this.set('job.driver_license');
      console.log("Tech: ", this.get('tech'));
      this.set('job.tech');
      this.get('job').save().then(function() {
        this.transitionToRoute('match.dashboard');
      }.bind(this));
    }
  }
});
