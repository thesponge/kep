import DS from 'ember-data';

//export default DS.ActiveModelAdapter.extend({
export default DS.FixtureAdapter.extend({
  latency: 500
  //namespace: 'api/v1'
});
