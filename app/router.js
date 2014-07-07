import Ember from 'ember';

var Router = Ember.Router.extend({
});

Router.map(function() {
  this.resource('phones');
  this.resource('phone', { path: '/phones/:phone_id'});
});

export default Router;
