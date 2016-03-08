import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  
	this.route('songs'); 
	this.route('song', {path: ':song_trackId'});
}); 
export default Router;
