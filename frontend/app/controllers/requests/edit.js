import Ember from 'ember';

export default Ember.Controller.extend({
  compensations_select: function() {
    return this.store.find('request-compensation');
  }.property(),
  types_select: function() {
    var output = [];
    var data = this.store.fetchAll('request-type').then(function(records){
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
        self.notifications.addNotification({
            message: 'Request #' + self.get('request').id + ' updated!',
            type: 'success',
            autoClear: true
        });
        self.transitionToRoute('requests.show', self.get('request'));
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
      this.get('request').rollback();
      this.transitionToRoute('requests.show', this.get('request'));
    }
  }
});
