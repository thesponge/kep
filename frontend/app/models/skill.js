import DS from 'ember-data';

var Skill = DS.Model.extend({
  category    : DS.attr('string'),
  name        : DS.attr('string'),
  icon        : DS.attr('string'),
  account    : DS.hasMany('account'),
  assignment : DS.hasMany('assignment'),
});

export default Skill;
