import Ember from 'ember';

export default Ember.Route.extend({
	actions:{
		search: function(){
			
			 var controller = this.get('controller');
			 var title = controller.get('title');
			 console.log("This is title ", title)
			 controller.set('title', '');

		}	
	}
	
});  

