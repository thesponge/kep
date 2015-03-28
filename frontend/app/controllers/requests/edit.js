import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateRequest: function() {
      console.log("Title: ", this.get('request.title'));
      this.set('request.title', this.get('request.title'));
      console.log("Description: ", this.get('request.description'));
      this.set('request.description', this.get('request.description'));
      //console.log("Travel: ", this.get('request.travel'));
      //this.set('request.travel');
      //console.log("Driving license: ", this.get('request.driver_license'));
      //this.set('request.driver_license');

      var self = this;
      self.get('request').save().then(function() {
        console.log('Saved!');
        self.transitionToRoute('requests.show', self.get('request'));
      });
    }
  }
});
