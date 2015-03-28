import DS from 'ember-data';

var attr = DS.attr;

var Job = DS.Model.extend({
  title:                 attr('string'),
  description:           attr('string'),
  travel:                attr('string'),
  driver_license:        attr('string'),
  //job_type_ids:          attr(),
  //job_compensation_ids:  attr(),
  //job_priority_ids:      attr(),
  types:                 DS.hasMany('jobType', {async: true, embedded: 'always'}),
  compensations:         DS.hasMany('jobCompensation', {async: true/*, embedded: 'always'*/})
});

//Job.reopenClass({
//  FIXTURES: [
//    {id: 1, title: 'Job One'},
//    {id: 2, title: 'Job Two'},
//    {id: 3, title: 'Job Three'}
//  ]
//});

export default Job;
