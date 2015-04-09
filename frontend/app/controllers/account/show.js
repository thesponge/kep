import Ember from 'ember';


export default Ember.Controller.extend({
  showNotification: function(message, type){
    this.get('notifications').addNotification({
      message: message,
      type: type,
      autoClear: true
    })
  },
  model: function(params){
    return this.store.find('account', params);
  }.property(),
  updateAttribute: function(property) {
    this.set('model.account.'+property, this.get('model.account.'+property))
    this.get('model.account').save().then(function(){
      this.showNotification('Success!', 'success');
      this.get('modal').hide();
    }.bind(this),
    function(response){
      this.showNotification('There was an error!', 'error');
      this.get('modal').hide();
    }.bind(this))
  },
  actions: {
    updateBio: function() {
      this.updateAttribute('bio');
    },
    updateDisplayName: function() {
      this.updateAttribute('display_name');
    },
    updateUrl: function() {
      this.updateAttribute('url');
    },
    updateIntentions: function() {
      this.updateAttribute('intention_ids');
    },
    updateSkills: function() {
      this.updateAttribute('skill_ids');
    },
    updateAffiliations: function() {
      this.updateAttribute('affiliation_ids');
    },
  },

  intentions_select: function() {
    return this.store.find('intention');
  }.property(),
  affiliations_select: function() {
    return this.store.find('affiliation');
  }.property(),
  languages_select: function() {
    return this.store.find('language');
  }.property(),
  skills_select: function() {
    var output = [];
    var data = this.store.fetchAll('skill').then(function(records){
      records.forEach(function(item){

        var filter = output.filter(function(obj) {
              return obj.text == item.get('category');
            });

        if (filter.length === 0) {
          output.push({ 
            text: item.get('category'),
            children:[
              {
                id: item.get('id'),
                text: item.get('name')
              }
            ]
          });
        } else {
          var index = output.indexOf(filter[0]);
          output[index].children.push(
            {
              id: item.get('id'),
              text: item.get('name')
            }
          );
        }
      });
    });

    return output;
  }.property(),
});
