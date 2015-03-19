import DS from 'ember-data';

//var hasMany = DS.hasMany;

var Job = DS.Model.extend({
  title: DS.attr('string')
});

Job.reopenClass({
  FIXTURES: [
    {id: 1, title: 'Title One'},
    {id: 2, title: 'Title Two'},
    {id: 3, title: 'Title Three'}
  ]
});

export default Job;
