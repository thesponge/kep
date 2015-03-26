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
  request: function() {
    return this.store.createRecord('request');
  }.property(),
  actions: {
    submitRequest: function() {
      console.log("Title: ", this.get('request.title'));
      console.log("Description: ", this.get('request.description'));
      console.log("Travel: ", this.get('request.travel'));
      console.log("Driving license: ", this.get('request.driver_license'));
      console.log("Tech: ", this.get('tech'));
      this.get('request').save().then(function() {
        this.transitionToRoute('match.dashboard');
      }.bind(this));
    }
  }
});
