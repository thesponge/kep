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
  this.resource('account', function() {
    this.route('new');
    this.route('details');
  });
  this.resource('apps', function() {
    this.resource('match', function() {
      this.resource('jobs', function() {
        this.route('browse');
        this.route('suggested');
        this.route('accepted');
      });
      this.route('dashboard');
    });
  });
});

export default Router;
