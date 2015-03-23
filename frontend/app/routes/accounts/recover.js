import Ember from 'ember';
import { raw } from 'ic-ajax';

export default Ember.Route.extend({
  actions: {
    deviseSendRecover: function(identification) {
      var req = raw({
        type: 'POST',
        url: '/users/password',
        data: { "email": identification },
        dataType: 'json'
      });
      req.then(function(result){
        console.log('Response from Rails', result.response);
      },
      function(response) {
        console.error('There was a problem', response.jqXHR.responseText, response);
      }
      )
    }
  }
});
