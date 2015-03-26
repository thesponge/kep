import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
//  serializeAttribute: function(record, json, key, attribute) {
//    var attrs = Ember.get(this, 'attrs');
//    var value = Ember.get(record, key), type = attribute.type;
//
//    if (type) {
//      var transform = this.transformFor(type);
//      value = transform.serialize(value);
//    }
//
//    // if provided, use the mapping provided by `attrs` in
//    // the serializer
//    key = attrs && attrs[key] || Ember.String.decamelize(key);
//
//    json[key] = value;
//  }
//  ,
//export default DS.FixtureAdapter.extend({
  //latency: 500
  namespace: 'api/v1'
});
