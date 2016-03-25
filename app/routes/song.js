import Ember from 'ember';


export default Ember.Route.extend({
findAll: function(param){
		
		return $.ajax({
		url: 'https://itunes.apple.com/search?term=' + param,
		dataType: 'jsonp',
		success: function(response){
			
			return response
		}
		}).then(function(data){

			return data.results
				
				
		})
		
	},

	model: function(params) {
		console.log("This is params ", params)
		var coords = this.controllerFor('songs').get('title');
		var dat
		var index = this.findAll(coords).then(function(response){
			
			response.filter(function(obj){
				 if(obj.trackId == params.song_trackId){
				 	dat = obj
				 	return 
				 }
				 
			})
			return dat
		})
		return index;
 }

});  

