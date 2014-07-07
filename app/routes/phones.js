import Ember from 'ember';

var PhonesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('phone');
  }
});

export default PhonesRoute;
