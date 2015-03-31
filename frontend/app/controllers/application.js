import Ember from 'ember';

export default Ember.Controller.extend({
  model: function() {
    if (this.session.content.id !== undefined) {
      return this.store.find('user', this.session.content.id);
    }
  }.property(),
});

