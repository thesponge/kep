import DS from 'ember-data';

var attr = DS.attr;

var jobType = DS.Model.extend({
  category:  attr('string'),
  job:       DS.belongsTo('job', {async: true, embedded: 'always'})
});

export default jobType;

