import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  //model: function() {
  //  return Resource.find();
  //}
  //renderTemplate: function(controller, model){
  //  //console.log(model.assignments.content);
  //  this.controller.get('assignments').reload();
  //},
  //setupController: function(controller, model){
  //  controller.set('assignments', this.store.find('assignments'));
  //  controller.set('resources', this.store.find('resources'));
  //}
  //,
  //model: function() {
  //  return Ember.RSVP.hash({
  //    assignments: this.store.fetchAll('assignment'),
  //    resources: this.store.fetchAll('resource')
  //  });
  //}
  //,
  //afterModel: function(){
  //  this.model.fetch();
  //}
  titleToken: "Match dashboard",
  actions: {
    notificationsMessage: function(error){
      console.log('Messages not implemented yet.');
      this.notifications.addNotification({
          message: 'Boo',
          type: 'error',
          autoClear: false
      });
      alert('Notifications are still under development!');
    }
  },
  renderTemplate: function() {
    this.render();
    this.render('assignments/sideroll', {
      outlet: 'rightside',
      into: 'match.dashboard',
      controller: 'assignments'
    });
    this.render('resources/sideroll', {
      outlet: 'leftside',
      into: 'match.dashboard',
      controller: 'resources'
    });
  },
});

