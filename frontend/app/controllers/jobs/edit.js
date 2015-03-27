import Ember from 'ember';

export default Ember.Controller.extend({
  //job: function() {
  //  return this.store.find('job', 66);
  //}.property(),
  actions: {
    updateJob: function() {
      console.log("Title: ", this.get('job.title'));
      this.set('job.title', this.get('job.title'));
      console.log("Description: ", this.get('job.description'));
      this.set('job.description', this.get('job.description'));
      //console.log("Travel: ", this.get('job.travel'));
      //this.set('job.travel');
      //console.log("Driving license: ", this.get('job.driver_license'));
      //this.set('job.driver_license');

      var self = this;
      self.get('job').save().then(function() {
        console.log('Saved!');
        self.transitionToRoute('jobs.show', self.get('job'));
      });
    }
  }
});
