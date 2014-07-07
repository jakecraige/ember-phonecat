import phoneFixtures from 'ember-phonecat/models/phone-fixtures';
import DS from 'ember-data';

var attr = DS.attr;

var Phone =  DS.Model.extend({
  age: attr(),
  imageUrl: attr(),
  name: attr(),
  snippet: attr(),
  additionalFeatures: attr(),
  android: attr(),
  availability: attr(),
  battery: attr(),
  camera: attr(),
  connectivity: attr(),
  description: attr(),
  display: attr(),
  hardware: attr(),
  images: attr(),
  sizeAndWeight: attr(),
  storage: attr(),

  cameraJoinedFeatures: function() {
    return this.get('camera.features').join(', ');
  }.property('camera.features.[]')
});

Phone.reopenClass({
  FIXTURES: phoneFixtures()
});

export default Phone;
