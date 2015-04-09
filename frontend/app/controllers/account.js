import Ember from 'ember';

export default Ember.Controller.extend({
  model: function() {
    return this.store.find('account', function(params){
      return $.getJSON('/account');
    });
  }.property(),
});

