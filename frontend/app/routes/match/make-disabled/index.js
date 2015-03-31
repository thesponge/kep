import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  actions: {
    setError: function(message) {
      this.set('matchErrorMessage', message);
      console.log('matchErrorMessage' + message);
      this.controllerFor('match').set('matchErrorMessage', message);
    }
  },
  renderTemplate: function() {
    this.render('match/index');
    this.render('match/job/sideroll', {
      outlet: 'rightside',
      into: 'match/index',
      controller: 'jobs'
    });
    this.render('match/job/request/sideroll', {
      outlet: 'leftside',
      into: 'match/index',
      controller: 'requests'
    });
  },
//  renderTemplate: function() {
//    this.render();
//    this.render('match.dashboard.index', {
//      into: 'match',
//      outlet: 'master'
//    });
//  }
//  beforeModel: function() {
//    this.transitionTo('match.dashboard');
//  }
});
