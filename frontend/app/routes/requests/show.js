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
        var jobsController = this.controllerFor('jobs.show');
        console.log('step 2');
        jobsController.set('model', 
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
      this.controllerFor('jobs.show').set('match', null);
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
    },
    sendMatch: function(params) {
      var newMatch        = this.store.createRecord('match');
      //newMatch.job_id     = this.controller.match;
      //newMatch.request_id = this.context.id;
      newMatch.set('j_id', this.controller.match);
      newMatch.set('r_id', this.context.id);
      console.log('Called sendMatch from requests route.');
      console.log('Request: ', this.context.id,
                    ', job: ', this.controller.match);
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
      Ember.$('jobs-container .rollmask').show();
      var jobsController = this.controllerFor('jobs.show');
      console.log('rT params: ', match);
      jobsController.set('match', match);
      jobsController.set('matchBase', true);
      jobsController.set('model', 
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

