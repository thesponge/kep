import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});


loadInitializers(App, config.modulePrefix);

Ember.View.reopen({
  didInsertElement : function(){
    this._super();
    Ember.run.scheduleOnce('afterRender', this, this.afterRenderEvent);
  },
  afterRenderEvent : function(){
    //Foundation.global.namespace = '';
    Ember.$(document).foundation();
  }
});

DS.Store.reopen({
    findOneQuery: function(type, id, query) {
        var store = this;
        var typeClass = store.modelFor(type);
        var adapter = store.adapterFor(typeClass);
        var serializer = store.serializerFor(typeClass);
        var url = adapter.buildURL(type, id);
        var ajaxPromise = adapter.ajax(url, 'GET', { data: query });

        return ajaxPromise.then(function(rawPayload) {
            var extractedPayload = serializer.extract(store, typeClass, rawPayload, id, 'find');
            return store.push(typeClass, extractedPayload);
        });
    }
});

export default App;
