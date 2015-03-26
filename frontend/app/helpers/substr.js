import Ember from 'ember';

export function substr(passedString, startstring, endstring) {
  var output = passedString.substring( startstring, endstring );
  return new Handlebars.SafeString(output)
}

export default Ember.Handlebars.makeBoundHelper(substr);
