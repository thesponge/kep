import Ember from 'ember';

//Ember.LinkView.reopen({
//  attributeBindings: ['data-reveal-id']
//});

export default Ember.Controller.extend({
  user: function() {
    return this.store.createRecord('user');
  }.property(),
  actions: {
    register: function() {
      console.log('Accessing the register action');
      console.log('User: ' + this.get('user.email'));
      console.log('Password: ' + this.get('user.password'));
      console.log('Confirmation: ' + this.get('user.password_confirmation'));
      this.get('user').save().then(function() {
        this.transitionToRoute('login');
      }.bind(this));
    },
  }
});
