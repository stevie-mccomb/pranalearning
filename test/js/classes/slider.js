/*
*	Slider Class
*	[Contains SubSliders]
*	
*	Author: Stevie McComb of PranaMachine LLC
*	This script is owned and copyrighted by the aforementioned author.
*	
*	Dependencies: This class is dependent upon the core
*	MooTools library, as well as the fx.reveal module.
*	
*	Description: The Slider class serves as a form of
*	navigation that is particularly useful for mobile
*	websites.  A slider is composed of three parts,
*	the handle (or button), the slide itself, and the
*	optional sub-slider.  The sub-slider itself is
*	composed of the same primary components: a handle
*	(or button) and the sub-slide itself.
*	
*	Proper Use: In order for the code to function
*	properly, the constructor must contain the id
*	of the slider as it is written in the base .html
*	file.  If the slide contains a sub-slider, then
*	the constructor must also contain a boolean value
*	of true for the variable hasSubMenu.
*
*	Visual HTML Structure Without Sub-Slides:
*		<div id="slider_sliderName">
*			<div class="button">
*				<h1>Button Title</h1>
*			</div>
*			<div class="masterSlide">
*				<div class="sliderContent">
*					<h3>Actual slide content</h3>
*					<p>Slide content continued...</p>
*				</div>
*			</div>
*		</div>
*	
*	Visual HTML Structure With Sub-Slides:
*		<div id="slider_sliderName">
*			<div class="button">
*				<h3>Button Title</h3>
*			</div>
*			<div class="masterSlide">
*				<div class="subButton" data-targ="0">
*					<h4 data-targ="0">Sub-Button Title</h4>
*					<div class="subSlide" data-cont="0">
*						<h5>Actual sub-slide content</h5>
*						<p>Sub-slide content continued</p>
*					</div>
*				</div>
*				<div class="subButton" data-targ="1">
*					<h4 data-targ="1">Sub-Button Title</h4>
*					<div class="subSlide" data-cont="1">
*						<h5>Actual sub-slide content</h5>
*						<p>Sub-slide content continued</p>
*					</div>
*				</div>
*			</div>
*		</div>
*	
*	Other Notes:
*	1. The slides within the slider and its child sub-
*	are differentiated by "masterSlide" and "subSlide".
*	
*	2. The text on a sub-slider handle must be an h4
*	unless changed in the sub-slider section of the
*	script.
*	
*	3. The sub-sliders can be composed of an infinite
*	number of slides and handles that are differentiated
*	by the "data-targ" property.  In order for the sub-
*	slider to function properly, its handle and slide
*	must have matching "data-targ" and "data-cont"
*	properties.
*
*	4. To make sure that the slider collapse animation
*	does not play when the page opens initially, set
*	your .masterSlide class in your CSS to display: none;
*/

// Static singleton array function
Class.Mutators.Static = function(members) {
	this.extend(members);
}

// Begin Slider class
var Slider = new Class({
	
	Implements: [Options, Events],
	
	// Static array in which to store the sliders
	Static: {
		sliders: []
	},
	
	// Optional subSlider variable
	options: {
		hasSubMenu: false
	},
	
	// Constructor
	initialize: function(element, options)
	{
		// Set the hasSubMenu variable to this instance
		this.setOptions(options);
		// Add this slider instance to the static array
		Slider.sliders.push(this);
		
		// variables for the handle and slide
		this.slider = document.id(element);
		this.button = this.slider.getElement('.button');
		this.masterSlide = this.slider.getElement('.masterSlide');
		// Fx.Reveal variables for the slider itself
		this.masterReveal = new Fx.Reveal(this.masterSlide);
		// Immediately use the Fx.Reveal dissolve function to collapse the slider
		this.masterReveal.dissolve();
		
		// If this slider instance has a submenu, do the following:
		if(this.options.hasSubMenu) {
			// Variables for the text, handles, and slides of the subSlides
			this.subTitles = this.masterSlide.getElements('h4');
			this.subButtons = this.masterSlide.getElements('.subButton');
			this.subSlides = this.masterSlide.getElements('.subSlide');
			// Collapse the sub-slider
			this.subSlides.dissolve();
			// Add an event listener to open and close the sub-slider for both the text and handle itself
			this.subTitles.addEvent('click', this.toggleSubSlider.bind(this));
			this.subButtons.addEvent('click', this.toggleSubSlider.bind(this));
		}
		
		// add the event listener to open and close the master slider
		this.button.addEvent('click', this.toggleMasterSlider.bind(this));
	},
	
	// Function that opens and closes the master slider
	toggleMasterSlider: function() {
		// Closes every slider other than the one clicked
		for(var i = 0; i < Slider.sliders.length;++i)
		{
			if(Slider.sliders[i] != this)
			{
			  Slider.sliders[i].closeIt();
			}
		}
		// If the slider has a sub-slider, then it collapses the sub-slider has well
		if (this.options.hasSubMenu) { this.subSlides.dissolve(); };
		// Finally, open the slider that was clicked
		this.masterReveal.toggle();
	},
	
	// Function that opens and closes the sub-slider
	toggleSubSlider: function(e) {
		// Collapse any open sub-sliders associated with this instance of the masterSlider
		for (var i = 0; i < this.subSlides.length; ++i) {
			if (this.subSlides[i].getStyle('display') == 'block') {
				this.subSlides[i].dissolve();
			}
		}
		var targ = e.target.get('data-targ');
		// Finds and opens the particular sub-slider that was clicked
		var subReveal = new Fx.Reveal(this.masterSlide.getElement(this.subSlides[targ])).toggle();
	},
	
	// Function a given slider
	closeIt: function() {
		if (this.options.hasSubMenu) { this.subSlides.dissolve(); };
		this.masterReveal.dissolve();
	}
});