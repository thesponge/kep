import DS from 'ember-data';

var Request = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  description_fragment: function() {
    return this.get('description').substr(0, 150) + ' [...]';
  }.property('description')
});

//Request.reopenClass({
  //FIXTURES: [
    //{id: 1, title: 'Request One'},
    //{id: 2, title: 'Request Two'},
    //{id: 3, title: 'Request Three'}
  //]
//});

export default Request;
