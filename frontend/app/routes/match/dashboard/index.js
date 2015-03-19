import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import Request from "../../../models/request.js"

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  //model: function() {
  //  return Request.find();
  //}
});

