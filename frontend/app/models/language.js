import DS from 'ember-data';

var Language = DS.Model.extend({
  iso        : DS.attr('string'),
  common     : DS.attr('string'),
  account    : DS.hasMany('account'),
  assignment : DS.hasMany('assignment'),
});

export default Language;
