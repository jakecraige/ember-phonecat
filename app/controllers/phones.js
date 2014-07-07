import Ember from 'ember';
var get = Ember.get;

var PhonesController = Ember.ArrayController.extend({
  sort: 'name',

  query: '',

  sortOptions: [
    { text: 'Alphabetical', value: "name"},
    { text: 'Newest', value: "age"}
  ],

  sortedPhones: function(){
    return get(this, 'model').sortBy(get(this, 'sort'));
  }.property('model.@each', 'sort'),

  filteredPhones: function() {
    return get(this, 'sortedPhones').filter(function(item){
      return get(item, 'name').toLowerCase().indexOf(get(this, 'query').toLowerCase()) > -1;
    }, this);
  }.property('query', 'sortedPhones')

});

export default PhonesController;
