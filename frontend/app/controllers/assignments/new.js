import Ember from 'ember';

export default Ember.Controller.extend({
  //assignment: function() {
  //  return this.store.createRecord('assignment');
  //}.property(),
  newAssignment: null,
  rewards_select: function() {
    return this.store.find('assignment-reward');
  }.property(),
  types_select: function() {
    var output = [];
    var data = this.store.fetchAll('assignment-type').then(function(records){
      records.forEach(function(item){

        var filter = output.filter(function(obj) {
              return obj.text == item.get('category');
            });

        if (filter.length === 0) {
          output.push({ 
            text: item.get('category'),
            children:[
              {
                id: item.get('id'),
                text: item.get('option')
              }
            ]
          });
        } else {
          var index = output.indexOf(filter[0]);
          output[index].children.push(
            {
              id: item.get('id'),
              text: item.get('option')
            }
          );
        }
      });
    });

    return output;
  }.property(),
  actions: {
    submitAssignment: function() {
      console.log("Title: ", this.get('newAssignment.title'));
      console.log("Description: ", this.get('newAssignment.description'));
      console.log("Travel: ", this.get('newAssignment.travel'));
      console.log("Driving license: ", this.get('newAssignment.driver_license'));
      var self = this;
      self.get('newAssignment').save().then(function() {
        //this.get('assignments').pushObject(self.get('assignment'));
        self.notifications.addNotification({
            message: 'Assignment #' + self.get('newAssignment').id + ' created!',
            type: 'success',
            autoClear: true
        });
        self.transitionToRoute('assignments.show', self.get('newAssignment'));
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
      this.get('newAssignment').deleteRecord();
      self.transitionToRoute('match.dashboard');
    }
  },
});
