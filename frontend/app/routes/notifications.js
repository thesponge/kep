import Ember from 'ember';

export default Ember.Route.extend({
  activate: function(){
    this.notifications.addNotification({
        message: 'Notifications system is still under development!',
        type: 'error',
        autoclear: true
    });
  }
});
