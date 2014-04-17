var PhoneView = Ember.View.extend({
  actions: {
    selectImage: function(photo) {
      this.set('selectedImage', photo);
    }
  }
});

export default PhoneView;
