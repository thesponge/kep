import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

Ember.LinkView.reopen({
  attributeBindings: ['data-reveal-id']
});

export default Ember.Controller.extend(LoginControllerMixin, {
    authenticator: 'simple-auth-authenticator:devise',
    actions: {
      successAction: function() {
        Ember.get(this, 'flashes').success('Success!', 20000);
      },
     
      warningAction: function() {
        Ember.get(this, 'flashes').warning('This is a warning message'); // timeout is optional
      },
     
      infoAction: function() {
        Ember.get(this, 'flashes').info('You just did something...', 500);
      },
     
      dangerAction: function() {
        Ember.get(this, 'flashes').alert('So danger');
      },
     
      customAction: function() {
        Ember.get(this, 'flashes').addMessage('This is a flash with a custom type', 'myCustomType', 3000)
      },
     
      clearMessages: function() {
        Ember.get(this, 'flashes').clear(); // clears all visible flash messages 
      },
      authenticate: function() {
        var _this = this;
        this._super().then(null, function(error) {
          var message = error.error;
          _this.set('loginErrorMessage', message);
        });
      }
    },
}
);
