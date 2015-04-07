import DS from 'ember-data';

var attr = DS.attr;

var resourceIntention = DS.Model.extend({
  intention : attr('string'),
  resource  : DS.belongsTo('resource', {inverse : 'resource_intentions'})
});

export default resourceIntention;

