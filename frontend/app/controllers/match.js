import Ember from 'ember';

Ember.LinkView.reopen({
  attributeBindings: ['data-alert']
});

export default Ember.ObjectController.extend({
  //user: function() {
  //  return this.store.deleteRecord('user');
  //}.property(),
  //model: function() {
  //  return Ember.RSVP.hash({
  //    assignments: this.store.find('assignment'),
  //    resources: this.store.find('resource')
  //  });
  //},
  //newMatch: null,
  actions: {
    destroyCurrentUser: function() {
      console.log('Accessing the destroy action');
      this.notifications.addNotification({
          message: "I'm sorry, I can't let you do that.",
          type: 'error',
          autoClear: true
      });
      //this.get('model').destroyRecord().then(function() {
      //  this.transitionToRoute('login');
      //}.bind(this));
    },
    makeMatch: function(){
      alert('Accessed the Match Maker');
    },
    //sendMatch: function() {
    //  var self = this;
    //  self.get('newMatch').save().then(function(){
    //    self.notifications.addNotification({
    //      message: 'Yay, you made a match!',
    //      type: 'success'
    //    });
    //  })
    //}
  }
});
