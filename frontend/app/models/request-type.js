import DS from 'ember-data';

var attr = DS.attr;

var requestType = DS.Model.extend({
  category: attr('string'),
  option:   attr('string'),
  icon:     attr('string'),
  request:      DS.belongsTo('request', {inverse: 'request_types'})
});

export default requestType;

