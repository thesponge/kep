import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

// TODO: Double check for unused routes
Router.map(function() {
  this.route('index');
  this.route('application');
  this.route('candy');
  this.route('login');
  this.route('protected');
  this.route('authenticated', {path: '/'}, function() {
    this.resource('fixer', function(){
      this.route('/');
      this.route('/notifications');
      this.resource('/jobs', function(){
        this.route('suggested');
        this.route('accepted');
        this.route('browse');
      });
    });
  });
  this.resource('files', function() { });
  this.resource('fixer/jobs', function() { });
  this.resource('fixer/messages', function() { });
  this.resource('fixer/stats', function() { });
  this.resource('stats', function() { });
  this.route('fixer/jobs/accepted');
  this.route('fixer/jobs/browse');
  this.route('fixer/jobs/suggested');
});

export default Router;
