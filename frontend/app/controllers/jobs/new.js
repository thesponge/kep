import Ember from 'ember';

//export default Ember.ObjectController.extend({
//  actions: {
//    submitJob: function() {
//      console.log("Title: ", this.get('title'));
//      console.log("Description: ", this.get('description'));
//      console.log("Travel: ", this.get('travel'));
//      console.log("Driving license: ", this.get('driving_license'));
//      console.log("Tech: ", this.get('tech'));
//      this.createRecord('job', {
//        title:            this.get('title'),
//        description:      this.get('description'),
//        travel:           this.get('travel'),
//        driving_license:  this.get('driving_license'),
//        tech:             this.get('tech')
//      }).save().then(function(){
//        this.transitionToRoute('match.dashboard');
//      }.bind(this));
//    }
//  }
//});
//

export default Ember.Controller.extend({
  job: function() {
    return this.store.createRecord('job');
  }.property(),
  actions: {
    submitJob: function() {
      console.log("Title: ", this.get('job.title'));
      console.log("Description: ", this.get('job.description'));
      console.log("Travel: ", this.get('job.travel'));
      console.log("Driving license: ", this.get('job.driver_license'));
      var self = this;
      this.get('job').save().then(function() {
        //this.get('jobs').pushObject(self.get('job'));
        self.transitionToRoute('jobs.show', self.get('job'));
      });
    }
  }
});
