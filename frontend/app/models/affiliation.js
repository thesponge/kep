import DS from 'ember-data';

var Affiliation = DS.Model.extend({
  affiliation : DS.attr('string'),
  link        : DS.attr('string'),
  account     : DS.hasMany('account'),
});

export default Affiliation;
