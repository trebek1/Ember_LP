import Ember from 'ember';
import DS from 'ember-data';

	
export default Ember.Route.extend({
	
	findAll: function(param){
		
		return $.ajax({
		url: 'https://itunes.apple.com/search?term=' + param ,
		dataType: 'jsonp',
		success: function(response){
			
			return response
		}
		}).then(function(data){

			return data.results
				
				
		})
		
	},
	model: function(params){
		
		 var title = this.controllerFor('songs').get('title');
		
		var data = this.findAll(title);
		
		return data

	} 

});


