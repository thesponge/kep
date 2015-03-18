import Ember from 'ember';

export default Ember.View.extend({ //or Ember.Component.extend
  didInsertElement: function() {
    this.$().foundation(); //or Ember.$(document).foundation();
  },
  afterRenderEvent : function(){
    Ember.$('ul.roll').perfectScrollbar({
      suppressScrollX: true
    });

    Ember.$(window).resize(function() {
      if (window.innerHeight < 600) {
        Ember.$('ul.roll').height(window.innerHeight - 200);
      }
    });
  }
});
