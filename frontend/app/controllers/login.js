import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

Ember.LinkView.reopen({
  attributeBindings: ['data-reveal-id']
});

export default Ember.Controller.extend(LoginControllerMixin, {
  authenticator: 'simple-auth-authenticator:token'
});
//export default Ember.Controller.extend(LoginControllerMixin, {
//  authenticator: 'simple-auth-authenticator:token',
//  actions: {
//  login: function() {
//    var _this = this;
//    var data = this.getProperties('identification', 'password');
//    this.set('password', null);
//    this.get('session').authenticate('simple-auth-authenticator:token', data).then(null, function(error) {
//      _this.set('errorMessage', error.error);
//      });
//    }
//  }
//});
