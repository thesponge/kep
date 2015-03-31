import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    match: {
      replace: true,
      refreshModel: true
    }
  },
  beforeModel: function(params){
    console.log('bM params: ', params.queryParams.match);
      var reqc = this.controllerFor('requests.show');
      console.log('step 2');
      reqc.set('model', 
               this.store.find('request', params.queryParams.match)
              );
      console.log('step 3');
      //this.renderTemplate();
      console.log('step 4');
    //controllerFor('requests').set('request_id', params.queryParams.match);
  },
  //setupController: function(controller, model){
  //  this.controllerFor('request').set('request_id', 3);
  //},
  actions: {
    match: function(params){
      console.log('step 1');
      this.controller.set('match', (Math.floor(Math.random() * 6) + 1));
      //console.log('params: ', params.match);
      //console.log('step 2');
      //var reqc = this.controllerFor('requests.show');
      //console.log('step 3');
      //console.log('am params: ', params);
      //console.log('step 4');
      //reqc.set('model', 
      //         this.store.find('request', params.match)
      //        );
      //console.log('step 5');

      //this.renderTemplate();
      //console.log('step 6');
    }
  },
  renderTemplate: function(params){
    var reqc = this.controllerFor('requests.show');
    console.log('params: ', params.match);
    reqc.set('model', 
             this.store.find('request', params.match)
             //{title: 'bla', description: 'tralala'}
            );

    this.render();
    this.render('requests/show', {
      outlet: 'match',
      into: 'jobs/show',
      controller: 'requests.show'
    });
  }
});

