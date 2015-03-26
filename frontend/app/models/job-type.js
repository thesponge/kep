import DS from 'ember-data';

var attr = DS.attr;

var jobType = DS.Model.extend({
  category:  attr('string'),
  job:       DS.hasMany('job', {embedded: 'always'})
});

export default jobType;

