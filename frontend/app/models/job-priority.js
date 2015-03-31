import DS from 'ember-data';

var attr = DS.attr;

var jobPriority = DS.Model.extend({
  job:      DS.belongsTo('job', {inverse: 'job_types'})
});

export default jobPriority;

