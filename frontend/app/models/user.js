import DS from 'ember-data';

var attr = DS.attr;

var User = DS.Model.extend({
  email: attr('string'),
  password: attr('string'),
  password_confirmation: attr('string')
});

//Job.reopenClass({
//  FIXTURES: [
//    {id: 1, title: 'Job One'},
//    {id: 2, title: 'Job Two'},
//    {id: 3, title: 'Job Three'}
//  ]
//});

export default User;
