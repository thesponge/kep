import Ember from 'ember';

export default Ember.Controller.extend({
  rewards_select: function() {
    return this.store.find('resource-reward');
  }.property(),
  types_select: function() {
    var output = [];
    var data = this.store.fetchAll('resource-type').then(function(records){
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
    updateResource: function() {
      console.log("Title: ", this.get('resource.title'));
      this.set('resource.title', this.get('resource.title'));
      console.log("Description: ", this.get('resource.description'));
      this.set('resource.description', this.get('resource.description'));
      //console.log("Travel: ", this.get('resource.travel'));
      //this.set('resource.travel');
      //console.log("Driving license: ", this.get('resource.driver_license'));
      //this.set('resource.driver_license');

      var self = this;
      self.get('resource').save().then(function() {
        console.log('Saved!');
        self.notifications.addNotification({
            message: 'Resource #' + self.get('resource').id + ' updated!',
            type: 'success',
            autoClear: true
        });
        self.transitionToRoute('resources.show', self.get('resource'));
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
      this.get('resource').rollback();
      this.transitionToRoute('resources.show', this.get('resource'));
    }
  }
});
