import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('application');
  this.route('protected');
  this.route('login');
  this.route('candy');
  this.route('apps');
  this.route('match', { path: 'apps/match' }, function() {
    this.route('dashboard');
    this.resource('jobs', function() {
      this.route('browse');
    });
    this.resource('offers', function() {});
    this.resource('requests', function() {});
  });
  this.resource('accounts', function() {
    this.route('new', { path: 'register' });
  });
});

export default Router;
