import DS from 'ember-data';

var attr = DS.attr;

var Resource = DS.Model.extend({
  submissionType         : 'resource',
  user_id                : attr(),
  title                  : attr('string'),
  description            : attr('string'),
  travel                 : attr('string'),
  driver_license         : attr('string'),
  resource_intentions    : DS.hasMany('resourceIntention', {inverse: 'resource', async: true, embedded: 'always'}),
  resource_intention_ids : attr(),
  resource_priority_ids  : attr(),
  description_fragment: function() {
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

//Resource.reopenClass({
  //FIXTURES: [
    //{id: 1, title: 'Resource One'},
    //{id: 2, title: 'Resource Two'},
    //{id: 3, title: 'Resource Three'}
  //]
//});

export default Resource;
