import DS from 'ember-data';

var attr = DS.attr;

var Assignment = DS.Model.extend({
  submissionType       : 'assignment',
  user_id              : attr(),
  title                : attr('string'),
  description          : attr('string'),
  travel               : attr('string'),
  driver_license       : attr('string'),
  assignment_types            : DS.hasMany('assignmentType', {inverse: 'assignment', async: true, embedded: 'always'}),
  assignment_rewards    : DS.hasMany('assignmentReward', {inverse: 'assignment', async: true, embedded: 'always'}),
  assignment_type_ids         : attr(),
  assignment_reward_ids : attr(),
  assignment_priority_ids     : attr(),
  description_fragment : function() {
    if(this.get('description') !== undefined) {
      return this.get('description').substr(0, 150) + ' [...]';
    } else {
      return '';
    }
  }.property('description'),
  is_owner: function(){
    var session = container.lookup('simple-auth-session:main')
    return this.get('user_id') === session.content.id;
  }.property()
});

//Assignment.reopenClass({
//  FIXTURES: [
//    {id: 1, title: 'Assignment One'},
//    {id: 2, title: 'Assignment Two'},
//    {id: 3, title: 'Assignment Three'}
//  ]
//});

export default Assignment;
