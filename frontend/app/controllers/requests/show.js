import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteRequest: function() {
      this.get('model').destroyRecord().then(function() {
        this.transitionToRoute('match.dashboard');
      }.bind(this));
    }
  }
});
