import DS from 'ember-data';

var attr = DS.attr;

var Job = DS.Model.extend({
  submissionType       : 'job',
  user_id              : attr(),
  title                : attr('string'),
  description          : attr('string'),
  travel               : attr('string'),
  driver_license       : attr('string'),
  job_types            : DS.hasMany('jobType', {inverse: 'job', async: true, embedded: 'always'}),
  job_compensations    : DS.hasMany('jobCompensation', {inverse: 'job', async: true, embedded: 'always'}),
  job_type_ids         : attr(),
  job_compensation_ids : attr(),
  job_priority_ids     : attr(),
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

//Job.reopenClass({
//  FIXTURES: [
//    {id: 1, title: 'Job One'},
//    {id: 2, title: 'Job Two'},
//    {id: 3, title: 'Job Three'}
//  ]
//});

export default Job;
