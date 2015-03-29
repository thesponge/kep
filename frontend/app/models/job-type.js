import DS from 'ember-data';

var attr = DS.attr;

var jobType = DS.Model.extend({
  category: attr('string'),
  option:   attr('string'),
  job:      DS.belongsTo('job', {inverse: 'job_types'})
});

export default jobType;

