import DS from 'ember-data';

var Request = DS.Model.extend({
  title: DS.attr('string')
});

Request.reopenClass({
  FIXTURES: [
    {id: 1, title: 'Title One'},
    {id: 2, title: 'Title Two'},
    {id: 3, title: 'Title Three'}
  ]
});

export default Request;
