import Ember from 'ember';

export default Ember.Controller.extend({
  //assignment: function() {
  //  return this.store.find('assignment', 66);
  //}.property(),
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
    updateAssignment: function() {
      console.log("Title: ", this.get('assignment.title'));
      this.set('assignment.title', this.get('assignment.title'));
      console.log("Description: ", this.get('assignment.description'));
      this.set('assignment.description', this.get('assignment.description'));
      //console.log("Travel: ", this.get('assignment.travel'));
      //this.set('assignment.travel');
      //console.log("Driving license: ", this.get('assignment.driver_license'));
      //this.set('assignment.driver_license');

      var self = this;
      self.get('assignment').save().then(function() {
        console.log('Saved!');
        self.notifications.addNotification({
            message: 'Assignment #' + self.get('assignment').id + ' updated!',
            type: 'success',
            autoClear: true
        });
        self.transitionToRoute('assignments.show', self.get('assignment'));
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
      this.get('assignment').rollback();
      this.transitionToRoute('assignments.show', this.get('assignment'));
    }
  }
});
