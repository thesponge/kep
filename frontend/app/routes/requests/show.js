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
        var reqc = this.controllerFor('jobs.show');
        console.log('step 2');
        reqc.set('model', 
                 this.store.find('job', params.queryParams.match)
                );
    }
  },
 actions: {
    match: function(params){
      console.log('step 1');
      this.controller.set('match', (Math.floor(Math.random() * 6) + 1));
    },
    matchExit: function(params){
      console.log('Called matchExit from requests route');
      this.controller.set('match', null);
      this.render('null', {
        outlet: 'match',
        into: 'requests/show'
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
    }
  },
  renderTemplate: function(params){
    this.render();

    var match = params.match;
    if(match != undefined) {
      var jobc = this.controllerFor('jobs.show');
      console.log('rT params: ', match);
      jobc.set('match', match);
      jobc.set('matchBase', true);
      jobc.set('model', 
               this.store.find('job', match)
              );

      this.render('jobs/show', {
        outlet: 'match',
        into: 'requests/show',
        controller: 'jobs.show'
      });
    }
  }
});

