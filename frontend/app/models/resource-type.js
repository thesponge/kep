import DS from 'ember-data';

var attr = DS.attr;

var resourceType = DS.Model.extend({
  category : attr('string'),
  option   : attr('string'),
  icon     : attr('string'),
  resource  : DS.belongsTo('resource', {inverse : 'resource_types'})
});

export default resourceType;

