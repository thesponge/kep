import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    match: {
      refreshModel: true
    }
  },
});
