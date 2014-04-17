export default Ember.Handlebars.makeBoundHelper(function(val) {
  return val ? '\u2713' : '\u2718';
});
