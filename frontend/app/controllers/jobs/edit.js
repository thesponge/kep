import Ember from 'ember';

export default Ember.Controller.extend({
  //job: function() {
  //  return this.store.find('job', 66);
  //}.property(),
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
        self.notifications.addNotification({
            message: 'Job #' + self.get('job').id + ' updated!',
            type: 'success',
            autoClear: true
        });
        self.transitionToRoute('jobs.show', self.get('job'));
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
      this.get('job').rollback();
      this.transitionToRoute('jobs.show', this.get('job'));
    }
  }
});
