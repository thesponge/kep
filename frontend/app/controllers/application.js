import Ember from 'ember';

export default Ember.Controller.extend({
  model: function() {
    var session = container.lookup('simple-auth-session:main')
    //console.log(session);
    if (this.session.content.id != undefined) {
      return this.store.find('user', this.session.content.id);
    }
  }.property(),
});

