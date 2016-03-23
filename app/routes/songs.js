import Ember from 'ember';
import DS from 'ember-data';

	
export default Ember.Route.extend({
	findAll: function(){
		
		return $.ajax({
		url: 'https://itunes.apple.com/search?term=linkin+park',
		dataType: 'jsonp',
		success: function(response){
			
			return response
		}
		}).then(function(data){

			return data.results
				
				
		})
		
	},
	model: function(params){
		var data = this.findAll();
		console.log('data1 ', data)
		return data

	} 

});


