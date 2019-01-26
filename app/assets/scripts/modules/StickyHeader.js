import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll'
class StickyHeader{
	constructor(){
		this.SiteHeader = $(".site-header");
		this.handleTriggerElement = $(".large-hero__title");
		this.createHeaderWaypoints();
		this.pageSection = $(".page-section");
		this.headerLinks = $(".primary-nav a");
		this.createPageSectionWayPoints();
		this.addSmoothScroll();
	}

	addSmoothScroll(){
		this.headerLinks.smoothScroll();
	}
	

	createHeaderWaypoints(){
		var that = this;
		new Waypoint({
			element: this.handleTriggerElement[0],
			handler: function(direction){
				if(direction == "down"){
					that.SiteHeader.addClass("site-header--dark");
				} else {
					that.SiteHeader.removeClass("site-header--dark");
				}
			}
		});
	}
	createPageSectionWayPoints(){
		var that = this;
		this.pageSection.each(function(){
			var currentPageSection = this;
			new Waypoint({
				element: currentPageSection,
				handler: function(){
					var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
					that.headerLinks.removeClass("is-current-link");
					$(matchingHeaderLink).addClass("is-current-link");
				},
				offset: "18%"
			});
			new Waypoint({
				element: currentPageSection,
				handler: function(){
					var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
					that.headerLinks.removeClass("is-current-link");
					$(matchingHeaderLink).addClass("is-current-link");
				},
				offset: "-40%"
			});


		});
	}
}

export default StickyHeader;