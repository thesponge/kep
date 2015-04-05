import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  //this.route('application');
  //this.resource('jobs', function() {
  //  this.route('show', { path: ':job_id' });
  //  this.route('browse');
  //  this.route('suggested');
  //  this.route('taken');
  //});
  //this.route('protected');
  this.route('login');
  //this.route('candy');
  this.route('apps');
  this.route('match', {path: 'apps/match'}, function() {
    ////TODO: DRY on match subroutes
    //this.route('make', function(){
    //  this.route('job', function(){
    //    this.route('show', {path: ':job_id'}, function(){
    //      this.route('request', function() {
    //        this.route('show', {path: ':request_id'});
    //      });
    //    });
    //  });
    //  this.resource('requests', {path: 'request'}, function(){
    //    this.route('show', {path: ':request_id'}, function(){
    //      this.resource('jobs', {path: 'job'}, function() {
    //        this.route('show', {path: ':job_id'});
    //      });
    //    });
    //  });
    //});
    this.route('notifications');
    this.route('dashboard', function() {
      this.resource('requests', function() {
        this.route('show', {path: ':request_id'});
        this.route('edit', {path: ':request_id/edit'});
        this.route('new', {path: 'new'});
      });
      this.resource('jobs', function() {
        this.route('show', {path: ':job_id'});
        this.route('edit', {path: ':job_id/edit'});
        this.route('new', {path: 'new'});
      });
      //this.route('cake');
      //this.route('job');
    });
  });
  this.resource('accounts', function() {
    this.route('new', {path: 'register'});
    this.route('confirm');
    this.route('recover', {path: 'recover'});
    this.route('reset');
    this.route('destroy');
  });
});

export default Router;
