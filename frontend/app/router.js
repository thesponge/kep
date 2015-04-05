import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  //this.route('application');
  //this.resource('assignments', function() {
  //  this.route('show', { path: ':assignment_id' });
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
    //  this.route('assignment', function(){
    //    this.route('show', {path: ':assignment_id'}, function(){
    //      this.route('resource', function() {
    //        this.route('show', {path: ':resource_id'});
    //      });
    //    });
    //  });
    //  this.resource('resources', {path: 'resource'}, function(){
    //    this.route('show', {path: ':resource_id'}, function(){
    //      this.resource('assignments', {path: 'assignment'}, function() {
    //        this.route('show', {path: ':assignment_id'});
    //      });
    //    });
    //  });
    //});
    this.route('notifications');
    this.route('dashboard', function() {
      this.resource('resources', function() {
        this.route('show', {path: ':resource_id'});
        this.route('edit', {path: ':resource_id/edit'});
        this.route('new', {path: 'new'});
      });
      this.resource('assignments', function() {
        this.route('show', {path: ':assignment_id'});
        this.route('edit', {path: ':assignment_id/edit'});
        this.route('new', {path: 'new'});
      });
      //this.route('cake');
      //this.route('assignment');
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
