import DS from 'ember-data';

export default DS.RESTSerializer.extend({
//    serializeHasMany: function(record, json, relationship) {
//        var key = relationship.key,
//            hasManyRecords = Ember.get(record, key);
//         
//        // Embed hasMany relationship if records exist
//        if (hasManyRecords && relationship.options.embedded == 'always') {
//            json[key] = [];
//            hasManyRecords.forEach(function(item, index){
//                json[key].push(item.serialize());
//            });
//        }
//        // Fallback to default serialization behavior
//        else {
//            return this._super(record, json, relationship);
//        }
//    },
//    serializeBelongsTo: function(record, json, relationship) {
//        var key = relationship.key,
//            belongsToRecord = Ember.get(record, key);
//         
//        if (relationship.options.embedded === 'always') {
//            json[key] = belongsToRecord.serialize();
//        }
//        else {
//            return this._super(record, json, relationship);
//        }
//    }
});
