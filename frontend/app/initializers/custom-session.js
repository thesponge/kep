import Ember from "ember";  
import Session from "simple-auth/session";

export default {  
  name: "custom-session",
  before: "simple-auth",
  initialize: function(container) {
    return;
  //  Session.reopen({
  //    setCurrentUser: function() {
  //      var id = this.get("user_id");
  //      var email = this.get("user_email")
  //      var self = this;

  //      if (!Ember.isEmpty(id)) {
  //        return container.lookup("store:main").find("user", {'email': email}).then(function(user) {
  //          self.set("currentUser", user);
  //        });
  //      }
  //    }.observes("user_id")
  //  });
  }
};
