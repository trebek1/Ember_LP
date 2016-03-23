import Ember from 'ember';

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

	model: function(params) {
		
		var dat
		var index = this.findAll().then(function(response){
			
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

