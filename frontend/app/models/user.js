import DS from 'ember-data';

var attr = DS.attr;

var User = DS.Model.extend({
  email                 : attr('string'),
  password              : attr('string'),
  password_confirmation : attr('string'),
  account               : DS.belongsTo ('account'),
  resources             : DS.hasMany('resource', { async : true, embedded : 'always' }),
  assignments           : DS.hasMany('assignment', { async : true, embedded : 'always' }),
  resource_ids          : DS.attr(),
  assignment_ids        : DS.attr(),
});

//User.reopenClass({
//  FIXTURES: [
//    {id: 1, email: 'user1@email.com'},
//    {id: 2, email: 'user2@email.com'},
//    {id: 3, email: 'user3@email.com'}
//  ]
//});

export default User;
