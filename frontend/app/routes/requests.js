import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('request');
  }
  //,
  //renderTemplate: function() {
  //  this.render('requests.index', { into: 'dashboard', outlet: 'req' });
  //}
});
