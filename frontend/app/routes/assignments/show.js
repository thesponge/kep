import Ember from 'ember';
import ApplicationRouteMixin from 'ember-modals/mixins/routes/application';

export default Ember.Route.extend(ApplicationRouteMixin, {
  queryParams: {
    match: {
      replace: true,
      refreshModel: true
    }
  },
  beforeModel: function(params){
    var match = params.queryParams.match;
    if(match !== undefined) {
      console.log('bM params: ', params.queryParams.match);
        var resourcesController = this.controllerFor('resources.show');
        console.log('step 2');
        resourcesController.set('model',
                 this.store.find('resource', params.queryParams.match)
                );
    }
  },
  actions: {
    match: function(params){
      console.log('step 1');
      this.controller.set('match', (Math.floor(Math.random() * 6) + 1));
    },
    matchExit: function(params){
      console.log('Called matchExit from assignments route');
      this.controller.set('match', null);
      this.controllerFor('resources.show').set('match', undefined);
      this.render('null', {
        outlet: 'match',
        into: 'assignments/show'
      });
    },
    showMatchModal: function() {
      this.controller.showModal('match/match-modal');
      this.render('match/match-modal-column', {
        outlet: 'assignment',
        into: 'match/match-modal',
        controller: 'assignments.show'
      });
      this.render('match/match-modal-column', {
        outlet: 'resource',
        into: 'match/match-modal',
        controller: 'resources.show'
      });
    },
    sendMatch: function(params) {
      var newMatch        = this.store.createRecord('match');
      //newMatch.assignment_id     = this.controller.match;
      //newMatch.resource_id = this.context.id;
      newMatch.set('j_id', this.context.id);
      newMatch.set('r_id', this.controller.match);
      console.log('Called sendMatch from resources route.');
      console.log('Resource: ', this.controller.match,
                    ', assignment: ', this.context.id);
      var self = this;
      //console.log('newMatch: ', newMatch);
      newMatch.save().then(function(){
        self.notifications.addNotification({
          message: 'Yay, you made a match!',
          type: 'success'
        });
      })
    }
  },
  renderTemplate: function(params){
    this.render();

    var match = params.match;
    if(match != undefined) {
      Ember.$('resources-container .rollmask').show();
      var resourcesController = this.controllerFor('resources.show');
      console.log('rT params: ', match);
      resourcesController.set('match', match);
      resourcesController.set('matchBase', true);
      resourcesController.set('model',
               this.store.find('resource', match)
              );

      this.render('resources/show', {
        outlet: 'match',
        into: 'assignments/show',
        controller: 'resources.show'
      });
    }
  }
});
