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
        self.notifications.addNotification({
            message: 'Request #' + self.get('newRequest').id + ' created!',
            type: 'success',
            autoClear: true
        });
        self.transitionToRoute('requests.show', self.get('newRequest'));
      },
      function(response) {
        console.error('There was a problem', response);
        Object.keys(response.errors).map(function(value, index) {
          response.errors[value].map(function(v, i){
            self.notifications.addNotification({
              message: value + ' ' + v,
              type: 'error',
              autoClear: true,
              clearDuration: 2500
            });
          });
        });
      }
      );
    },
    cancel: function(){
      var self = this;
      this.get('newRequest').destroyRecord().then(function() {
        self.transitionToRoute('match.dashboard');
      });
    }
  },
});
