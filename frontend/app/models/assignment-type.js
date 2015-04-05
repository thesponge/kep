import DS from 'ember-data';

var attr = DS.attr;

var assignmentType = DS.Model.extend({
  category : attr('string'),
  option   : attr('string'),
  icon     : attr('string'),
  assignment      : DS.belongsTo('assignment', {inverse : 'assignment_types'})
});

export default assignmentType;

