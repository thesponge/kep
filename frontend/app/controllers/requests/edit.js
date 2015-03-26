import Ember from 'ember';

export default Ember.Controller.extend({
  request: function() {
    return this.store.find('request', request_id);
  }.property(),
  actions: {
    updateRequest: function() {
      console.log("Title: ", this.get('request.title'));
      this.set('request.title');
      console.log("Description: ", this.get('request.description'));
      this.set('request.description');
      console.log("Travel: ", this.get('request.travel'));
      this.set('request.travel');
      console.log("Driving license: ", this.get('request.driver_license'));
      this.set('request.driver_license');
      console.log("Tech: ", this.get('tech'));
      this.set('request.tech');
      this.get('request').save().then(function() {
        this.transitionToRoute('match.dashboard');
      }.bind(this));
    }
  }
});
