var IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('phones');
  }
});

export default IndexRoute;
