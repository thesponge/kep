import Ember from 'ember';

export default Ember.Controller.extend({
  newRequest: null,
  actions: {
    submitRequest: function() {
      console.log("Title: ", this.get('newRequest.title'));
      console.log("Description: ", this.get('newRequest.description'));
      console.log("Travel: ", this.get('newRequest.travel'));
      console.log("Driving license: ", this.get('newRequest.driver_license'));
      var self = this;
      self.get('newRequest').save().then(function() {
        //this.get('requests').pushObject(self.get('request'));
        self.transitionToRoute('requests.show', self.get('newRequest'));
      });
    }
  }
});
