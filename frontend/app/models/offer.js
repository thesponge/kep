import DS from 'ember-data';

var Offer = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string')
});

Offer.reopenClass({
  FIXTURES: [
    {id: 1, title: 'Offer One'},
    {id: 2, title: 'Offer Two'},
    {id: 3, title: 'Offer Three'}
  ]
});

export default Offer;
