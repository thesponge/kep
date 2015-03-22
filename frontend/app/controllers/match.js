import Ember from 'ember';

Ember.LinkView.reopen({
  attributeBindings: ['data-alert']
});

export default Ember.ObjectController.extend({
  user: function() {
    return this.store.deleteRecord('user');
  }.property(),
  actions: {
    destroyCurrentUser: function() {
      console.log('Accessing the destroy action');
      this.get('model').destroyRecord().then(function() {
        this.transitionToRoute('login');
      }.bind(this));
    },
  }
});
