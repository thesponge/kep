import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteJob: function() {
      this.get('model').destroyRecord().then(function() {
        this.transitionToRoute('match.dashboard');
      }.bind(this));
    }
  }
});
