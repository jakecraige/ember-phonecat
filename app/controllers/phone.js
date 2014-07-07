import Ember from 'ember';

var PhoneController = Ember.ObjectController.extend({
 actions: {
    selectImage: function (image) {
      this.set('selectedImage', image);
    }
  },

  selectedImage: Ember.computed.defaultTo('images.firstObject')
});

export default PhoneController;
