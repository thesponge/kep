import Ember from 'ember';

Ember.LinkView.reopen({
  attributeBindings: ['data-reveal-id']
});

export default Ember.Controller.extend({
  actions: {
    register: function() {
      console.log('Accessing the register action');
    },
  }
});
