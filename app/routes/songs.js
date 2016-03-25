import Ember from 'ember';
import DS from 'ember-data';

	
export default Ember.Route.extend({
	
	findAll: function(param){
		
		console.log("What is param huur", param)
		//console.log("This is title2 ", title)
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
		
		 var coords = this.controllerFor('songs').get('title');
		
		var data = this.findAll(coords);
		
		return data

	} 

});


