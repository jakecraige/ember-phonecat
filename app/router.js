var Router = Ember.Router.extend({
  rootURL: ENV.rootURL,
  location: 'history'
});

Router.map(function() {
  this.resource('phones');
  this.resource('phone', { path: '/phones/:phone_id'});
});

export default Router;
