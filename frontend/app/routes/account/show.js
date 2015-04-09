import Ember from 'ember';
import ApplicationRouteMixin from 'ember-modals/mixins/routes/application';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    modalFor: function(template){
      //this.controller.showModal(template);
      var modal = this.controller.get('modal');

      //console.log('options: ', container);
      // Set the properties...
      modal.setProperties({
        template: template,
        //controller, 'account',
        //defaultOutlet: 'backup-modal',
        model: this.get('content')
      });

      // ... Then render the modal
      modal.show();
    }
  }
});
