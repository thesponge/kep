import DS from 'ember-data';

var attr = DS.attr;

var assignmentReward = DS.Model.extend({
  reward : attr('string'),
  icon         : attr('string'),
  assignment          : DS.hasMany('assignment', {inverse : 'assignment_rewards'})
  //assignment_type_ids:          attr('string'),
  //assignment_reward_ids:  attr('string'),
  //assignment_priority_ids:      attr('string')
});

//Assignment.reopenClass({
//  FIXTURES: [
//    {id: 1, title: 'Assignment One'},
//    {id: 2, title: 'Assignment Two'},
//    {id: 3, title: 'Assignment Three'}
//  ]
//});

export default assignmentReward;

