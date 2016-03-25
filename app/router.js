import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('index', {path: '/'})
	//this.route('songs', {paht: '/songs'}); 
	this.route('songs', {path: '/:title'}); 
	this.route('song', {path: '/:title/:song_trackId'});
}); 

export default Router;
