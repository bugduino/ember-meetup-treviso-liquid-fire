import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    toggleFoo: function() {
      this.controller.toggleProperty('foo');
    }
  }
});
