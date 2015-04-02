import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  r_id : attr(),
  j_id : attr()
});
