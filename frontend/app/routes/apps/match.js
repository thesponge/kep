import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  renderTemplate: function() {
    this.render('candy', {
      into: 'match'
    });
    this.render('apps/match/navbar_match', {
      into: 'match',
      outlet: 'navbar'
    });
  }
});
