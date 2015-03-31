import Ember from 'ember';

export default Ember.Route.extend({
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
    }
  },
  renderTemplate: function(params){
    this.render();

    var match = params.match;
    if(match != undefined) {
      var reqc = this.controllerFor('jobs.show');
      console.log('rT params: ', match);
      reqc.set('model', 
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

