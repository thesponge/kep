import Ember from 'ember';

Ember.LinkView.reopen({
  attributeBindings: ['data-alert']
});

export default Ember.ObjectController.extend({
  content: {}
});
