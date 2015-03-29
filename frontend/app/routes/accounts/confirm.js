import Ember from 'ember';
import { raw } from 'ic-ajax';

export default Ember.Route.extend({
  queryParams: {
    confirmation_token: {
    } 
  },
  model: function(params) {
    var token = params.confirmation_token;
    var req = raw({
      type: 'GET',
      url: '/users/confirmation?confirmation_token=' + token
    });
    req.then(function(result){
      console.log('Response from Rails', result.response);
    },
    function(response) {
      console.error('There was a problem', response.jqXHR.responseText, response);
    }
    );
    //this.transitionTo('login');
  }
});
