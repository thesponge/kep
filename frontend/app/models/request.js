import DS from 'ember-data';

var Request = DS.Model.extend({
  title: DS.attr('string')
});

Request.reopenClass({
  FIXTURES: [
    {id: 1, title: 'Request One'},
    {id: 2, title: 'Request Two'},
    {id: 3, title: 'Request Three'}
  ]
});

export default Request;
