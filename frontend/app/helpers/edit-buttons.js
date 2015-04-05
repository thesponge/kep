import Ember from 'ember';

export function editButtons(action, options) {
  console.log('Action: ', action, 'Options: ', options.assignment, options.user);
  if (action[0] == 'compare'){
    // TODO: Make sure this isn't a bug from ember-cli (the action[] baing an array) 
      if (options.user === options.assignment){
        return 'true';
      } else {
        return 'false';
      }
  }
}

export default Ember.HTMLBars.makeBoundHelper(editButtons);
