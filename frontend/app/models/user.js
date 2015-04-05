import DS from 'ember-data';

var attr = DS.attr;

var User = DS.Model.extend({
  email: attr('string'),
  password: attr('string'),
  password_confirmation: attr('string')
});

//Assignment.reopenClass({
//  FIXTURES: [
//    {id: 1, title: 'Assignment One'},
//    {id: 2, title: 'Assignment Two'},
//    {id: 3, title: 'Assignment Three'}
//  ]
//});

export default User;
