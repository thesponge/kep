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
  //    jobs: this.store.find('job'),
  //    requests: this.store.find('request')
  //  });
  //},
  //actions: {
  //  destroyCurrentUser: function() {
  //    console.log('Accessing the destroy action');
  //    this.get('model').destroyRecord().then(function() {
  //      this.transitionToRoute('login');
  //    }.bind(this));
  //  },
  //}
});
