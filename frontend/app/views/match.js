import Ember from 'ember';

export default Ember.View.extend({ //or Ember.Component.extend
  didInsertElement: function() {
    this.$().foundation(); //or Ember.$(document).foundation();
  },
  afterRenderEvent : function(){
    Foundation.global.namespace = '';
    Ember.$(document).foundation();
  }
});
