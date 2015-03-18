import DS from 'ember-data';

var belongsTo = DS.belongsTo;

export default DS.Model.extend({
  id: DS.attr('int'),
  category: DS.attr('string'),

  job: belongsTo('job')
});
