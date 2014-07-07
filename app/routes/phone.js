import Ember from 'ember';

var PhoneRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('phone', params.phone_id);
  }
});

export default PhoneRoute;
