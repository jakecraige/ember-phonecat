var Router = Ember.Router.extend({
  rootURL: ENV.rootURL,
  location: 'history'
});

Router.map(function() {
  this.resource('phones');
});

export default Router;
