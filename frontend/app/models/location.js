import DS from 'ember-data';

var Location = DS.Model.extend({
  country    : DS.attr('string'),
  state      : DS.attr(),
  city       : DS.attr('string'),
  latitude   : DS.attr('string'),
  longitude  : DS.attr('string'),
  account    : DS.hasMany('account'),
  assignment : DS.hasMany('assignment')
});

export default Location;
