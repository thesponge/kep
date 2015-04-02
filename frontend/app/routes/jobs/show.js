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
        var requestsController = this.controllerFor('requests.show');
        console.log('step 2');
        requestsController.set('model', 
                 this.store.find('request', params.queryParams.match)
                );
    }
  },
 actions: {
    match: function(params){
      console.log('step 1');
      this.controller.set('match', (Math.floor(Math.random() * 6) + 1));
    },
    matchExit: function(params){
      console.log('Called matchExit from jobs route');
      this.controller.set('match', null);
      this.controllerFor('requests.show').set('match', null);
      this.render('null', {
        outlet: 'match',
        into: 'jobs/show'
      });
    },
    showMatchModal: function() {
      this.controller.showModal('match/match-modal');
      this.render('match/match-modal-column', {
        outlet: 'job',
        into: 'match/match-modal',
        controller: 'jobs.show'
      });
      this.render('match/match-modal-column', {
        outlet: 'request',
        into: 'match/match-modal',
        controller: 'requests.show'
      });
    },
  },
  renderTemplate: function(params){
    this.render();

    var match = params.match;
    if(match != undefined) {
      Ember.$('requests-container .rollmask').show();
      var requestsController = this.controllerFor('requests.show');
      console.log('rT params: ', match);
      requestsController.set('match', match);
      requestsController.set('matchBase', true);
      requestsController.set('model', 
               this.store.find('request', match)
              );

      this.render('requests/show', {
        outlet: 'match',
        into: 'jobs/show',
        controller: 'requests.show'
      });
    }
  }
});

