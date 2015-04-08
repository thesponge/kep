import DS from 'ember-data';

var Intention = DS.Model.extend({
  intention   : DS.attr('string'),
  account     : DS.hasMany('account'),
  assignment  : DS.hasMany('assignment'),
});

export default Intention;
