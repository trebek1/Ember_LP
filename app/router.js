import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('data');

  this.route('album', {
    path: ':slug'
  }, function() {
    this.route(':id', {
      path: ':slug'
    });
  });
});

export default Router;
