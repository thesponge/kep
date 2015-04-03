import Ember from 'ember';

export default Ember.Controller.extend({
  //job: function() {
  //  return this.store.createRecord('job');
  //}.property(),
  newJob: null,
  compensations_select: function() {
    return this.store.find('job-compensation');
  }.property(),
  types_select: function() {
    var output = [];
    var data = this.store.fetchAll('job-type').then(function(records){
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
    submitJob: function() {
      console.log("Title: ", this.get('newJob.title'));
      console.log("Description: ", this.get('newJob.description'));
      console.log("Travel: ", this.get('newJob.travel'));
      console.log("Driving license: ", this.get('newJob.driver_license'));
      var self = this;
      self.get('newJob').save().then(function() {
        //this.get('jobs').pushObject(self.get('job'));
        self.notifications.addNotification({
            message: 'Job #' + self.get('newJob').id + ' created!',
            type: 'success',
            autoClear: true
        });
        self.transitionToRoute('jobs.show', self.get('newJob'));
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
      this.get('newJob').deleteRecord();
      self.transitionToRoute('match.dashboard');
    }
  },
});
