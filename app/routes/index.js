import Ember from 'ember';

export default Ember.Route.extend({
	actions:{
		search: function(){
			
			 var controller = this.get('controller');
			 var title = controller.get('title');
			 controller.set('title', '');
			 var scontroller = this.controllerFor('songs')
			 scontroller.set('title', title);
			 this.transitionTo('songs', title);

		}	
	}
	
});  

