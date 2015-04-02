import DS from 'ember-data';

var attr = DS.attr;

var requestCompensation = DS.Model.extend({
  title:         attr('string'),
  compensation:  attr('string'),
  job:           DS.hasMany('request')
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

export default requestCompensation;

