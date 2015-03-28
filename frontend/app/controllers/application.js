import Ember from 'ember';

export default Ember.Controller.extend({
  model: function() {
    var session = container.lookup('simple-auth-session:main')
    console.log(session);
    return this.store.find('user', 1/*{email: this.session.content.email}*/);
  }.property(),
});

