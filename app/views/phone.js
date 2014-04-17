var PhoneView = Ember.View.extend({
  didInsertElement: function() {
    var firstImage = this.get('controller.model.images.firstObject');
    this.set('selectedImage', firstImage);
  },
  actions: {
    selectImage: function(image) {
      this.set('selectedImage', image);
    }
  }
});

export default PhoneView;
