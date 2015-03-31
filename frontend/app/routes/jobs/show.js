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
        var reqc = this.controllerFor('requests.show');
        console.log('step 2');
        reqc.set('model', 
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
      this.render('null', {
        outlet: 'match',
        into: 'jobs/show'
      });
    }
  },
  renderTemplate: function(params){
    this.render();

    var match = params.match;
    if(match != undefined) {
      var reqc = this.controllerFor('requests.show');
      console.log('rT params: ', match);
      reqc.set('model', 
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

