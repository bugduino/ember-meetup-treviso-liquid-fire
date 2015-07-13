import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    higher: function(currentModel) {
      currentModel.set('id', currentModel.get('id') + 1);
    }
  }
});