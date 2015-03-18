import DS from 'ember-data';

var hasMany = DS.hasMany;

export default DS.Model.extend({
  id: DS.attr('int'),
  title: DS.attr('string'),
  description: DS.attr('string'),

  types: (hasMany('type'))
});
