import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

Ember.LinkView.reopen({
  attributeBindings: ['data-reveal-id']
});

export default Ember.Controller.extend(LoginControllerMixin, {
    authenticator: 'simple-auth-authenticator:devise'
});
