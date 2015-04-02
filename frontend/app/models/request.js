import DS from 'ember-data';

var attr = DS.attr;

var Request = DS.Model.extend({
  user_id               : attr(),
  title                 : attr('string'),
  description           : attr('string'),
  travel                : attr('string'),
  driver_license        : attr('string'),
  request_types         : DS.hasMany('requestType', {inverse       : 'request', async : true, embedded : 'always'}),
  request_compensations : DS.hasMany('requestCompensation', {async : true/*, embedded : 'always'*/}),
  submissionType        : 'request',
  description_fragment: function() {
    return this.get('description').substr(0, 150) + ' [...]';
  }.property('description'),
  is_owner: function(){
    var session = container.lookup('simple-auth-session:main')
    return this.get('user_id') === session.content.id;
  }.property()
});

//Request.reopenClass({
  //FIXTURES: [
    //{id: 1, title: 'Request One'},
    //{id: 2, title: 'Request Two'},
    //{id: 3, title: 'Request Three'}
  //]
//});

export default Request;
