var Slideshow = new Class({

	Implements: [Events],

	initialize: function(parentElement, slideDirectory, numberOfSlides) {
		// Global Variables
		this.parentElement = document.id(parentElement);
		this.slideDirectory = slideDirectory;
		this.numberOfSlides = numberOfSlides;
		this.slides = [];

		// Create the elements:
		this.container = new Element('div', {
			'id': 'slideshow'
		});
		this.controlPanel = new Element('div', {
			'id': 'controlPanel'
		});
		this.controls = new Element('div', {
			'id': 'controls'
		});
		this.lastButton = new Element('div', {
			'id': 'last',
			'class': 'slideshow_button'
		});
		this.playButton = new Element('div', {
			'id': 'play',
			'class': 'slideshow_button'
		});
		this.nextButton = new Element('div', {
			'id': 'next',
			'class': 'slideshow_button'
		});

		// Build the slideshow:
		this.container.inject(this.parentElement);
		this.controlPanel.inject(this.container);
		this.controls.inject(this.controlPanel);
		this.lastButton.inject(this.controls);
		this.playButton.inject(this.controls);
		this.nextButton.inject(this.controls);

		// Fill the slideshow with slides:
		this.populate();

		// Activate the buttons:
		this.lastButton.addEvent('click', this.lastSlide.bind(this));
		this.playButton.addEvent('click', this.togglePlay.bind(this));
		this.nextButton.addEvent('click', this.nextSlide.bind(this));
	},

	populate: function() {
		var currentSlideNumber = 1;
		for (var i = 0; i < this.numberOfSlides; ++i) {
			var newSlide = new Element('img', {
				'src': this.slideDirectory + currentSlideNumber + '.jpg',
				'class': 'slide'
			});
			newSlide.inject(this.container);
			if (currentSlideNumber == 1) {
				newSlide.setProperty('class', 'active slide');
			}
			currentSlideNumber++;
		}
	},

	lastSlide: function() {
		this.slides = this.container.getElements('img');
		for (var i = 0; i < this.slides.length; ++i) {
			if (this.slides[i].hasClass('active') && this.slides[i - 1]) {
				var animOut = new Fx.Morph(this.slides[i], {
					'duration': 'normal',
					'onComplete': this.removePriority.bind(this, this.slides[i])
				});
				animOut.start({
					'opacity': [1, 0],
					'z-index': [1, -1]
				});
				var animIn = new Fx.Morph(this.slides[i - 1], {
					'duration': 'normal',
					'onComplete': this.addPriority.bind(this, this.slides[i - 1])
				});
				animIn.start({
					'opacity': [0, 1],
					'z-index': [-1, 1]
				});
			}
		}
	},

	nextSlide: function() {
		this.slides = this.container.getElements('img');
		for (var i = 0; i < this.slides.length; ++i) {
			if (this.slides[i].hasClass('active') && this.slides[i + 1]) {
				var animOut = new Fx.Morph(this.slides[i], {
					'duration': 'normal',
					'onComplete': this.removePriority.bind(this, this.slides[i])
				});
				animOut.start({
					'opacity': [1, 0],
					'z-index': [1, -1]
				});
				var animIn = new Fx.Morph(this.slides[i + 1], {
					'duration': 'normal',
					'onComplete': this.addPriority.bind(this, this.slides[i + 1])
				});
				animIn.start({
					'opacity': [0, 1],
					'z-index': [-1, 1]
				});
			}
		}
	},

	togglePlay: function() {
		console.log('play toggled');
	},

	removePriority: function(slide) {
		slide.removeClass('active');
	},

	addPriority: function(slide) {
		slide.addClass('active');
	}

});