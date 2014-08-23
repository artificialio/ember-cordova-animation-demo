import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberCordovaAnimationDemoENV.locationType
});

Router.map(function() {
  this.resource('posts', { path: '/' }, function() {
    this.route('post', { path: ':post_id' });
  });
  this.route('about');
  this.route('contact');
});

export default Router;
