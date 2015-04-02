import DS from 'ember-data';

var attr = DS.attr;

var requestPriority = DS.Model.extend({
  request:      DS.belongsTo('request', {inverse: 'request_types'})
});

export default requestPriority;

