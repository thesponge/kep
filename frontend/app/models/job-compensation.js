import DS from 'ember-data';

var attr = DS.attr;

var jobCompensation = DS.Model.extend({
  compensation : attr('string'),
  icon         : attr('string'),
  job          : DS.belongsTo('job', {inverse : 'job_compensations'})
  //job_type_ids:          attr('string'),
  //job_compensation_ids:  attr('string'),
  //job_priority_ids:      attr('string')
});

//Job.reopenClass({
//  FIXTURES: [
//    {id: 1, title: 'Job One'},
//    {id: 2, title: 'Job Two'},
//    {id: 3, title: 'Job Three'}
//  ]
//});

export default jobCompensation;

