import Ember from 'ember';

export function substr(passedString, startstring, endstring) {
  if (passedString != undefined) {
    var output = passedString.substring( startstring, endstring );
    return new Handlebars.SafeString(output)
  } else {
    return passedString
  }
}

export default Ember.Handlebars.makeBoundHelper(substr);
