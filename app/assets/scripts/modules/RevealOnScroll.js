import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
class RevealOnScroll{
	constructor(){
		this.itemsToReveal = $(".feature-item ,.testimonials");
		this.hideInitially();
		this.createWaypoints();
	}
	hideInitially(){
		this.itemsToReveal.addClass("reveal-item");
	}
	createWaypoints(){
		this.itemsToReveal.each(function(){
			var CurrentItem = this;
			new Waypoint({
				element:CurrentItem,
				handler: function(){
					$(CurrentItem).addClass("reveal-item--is-visible");
				},
				offset: "70%"
			});
			
		});
	}
}

export default RevealOnScroll;