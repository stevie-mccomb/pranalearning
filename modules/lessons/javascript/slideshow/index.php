<script>
	document.addEvent('domready', function() {
		var projectFiles = new Slider('slider_projectFiles', { hasSubMenu: true });
		var chapterOne = new Slider('slider_chapterOne', { hasSubMenu: true });
		var chapterTwo = new Slider('slider_chapterTwo', { hasSubMenu: true });
		var chapterThree = new Slider('slider_chapterThree', { hasSubMenu: true });
		var chapterFour = new Slider('slider_chapterFour');
	});
</script>

<div id="container">

	<div id="sidebar">
		<div id="slider_projectFiles">
			<div class="button">
				<h3>Project Files</h3>
			</div>
			<div class="masterSlide">
				<div class="subButton" data-targ="0"><h4 data-targ="0">Source Code/Images</h4></div>
				<div class="subSlide" data-cont="0">
					<a href="modules/lessons/javascript/slideshow/src.zip"><div class="deepButton"><h3>Entire Source</h3></div></a>
					<a href="modules/lessons/javascript/slideshow/html.zip"><div class="deepButton"><h3>HTML</h3></div></a>
					<a href="modules/lessons/javascript/slideshow/css.zip"><div class="deepButton"><h3>CSS</h3></div></a>
				</div>
				<div class="subButton" data-targ="1"><h4 data-targ="1">Additional Materials</h4></div>
				<div class="subSlide" data-cont="1">
					<a href="?doc=how-to"><div class="deepButton"><h3>How to Use This Course</h3></div></a>
					<a href="?doc=help"><div class="deepButton"><h3>Help Section</h3></div></a>
					<a href="http://www.mootools.net/docs/"><div class="deepButton"><h3>FAQS / Glossary</h3></div></a>
				</div>
			</div>
		</div>
		<div id="slider_chapterOne">
			<div class="button">
				<h3>Chapter 1 - The Setup</h3>
			</div>
			<div class="masterSlide">
				<div class="subButton" data-targ="0"><h4 data-targ="0">Section 1  - The DOM</h4></div>
				<div class="subSlide" data-cont="0">
					<a href="#" class="seekButton" data-seek="48"><div class="deepButton"><h3>Article 1 - HTML</h3></div></a>
					<a href="#" class="seekButton" data-seek="98"><div class="deepButton"><h3>Article 2 - CSS</h3></div></a>
				</div>
				<div class="subButton" data-targ="1"><h4 data-targ="1">Section 2 - JavaScript</h4></div>
				<div class="subSlide" data-cont="1">
					<a href="#" class="seekButton" data-seek="122"><div class="deepButton"><h3>Article 1 - Class Setup</h3></div></a>
				</div>
			</div>
		</div>
		<div id="slider_chapterTwo">
			<div class="button">
				<h3>Chapter 2 - Initialize</h3>
			</div>
			<div class="masterSlide">
				<div class="subButton" data-targ="0"><h4 data-targ="0">Section 1 - Creating Assets</h4></div>
				<div class="subSlide" data-cont="0">
					<a href="#" class="seekButton" data-seek="390"><div class="deepButton"><h3>Article 1 - Slideshow Element</h3></div></a>
					<a href="#" class="seekButton" data-seek="460"><div class="deepButton"><h3>Article 2 - Arrows</h3></div></a>
					<a href="#" class="seekButton" data-seek="514"><div class="deepButton"><h3>Article 3 - Slides</h3></div></a>
				</div>
				<div class="subButton" data-targ="1"><h4 data-targ="1">Section 2 - Adding Action</h4></div>
				<div class="subSlide" data-cont="1">
					<a href="#" class="seekButton" data-seek="640"><div class="deepButton"><h3>Article 1 - Event Listeners</h3></div></a>
					<a href="#" class="seekButton" data-seek="694"><div class="deepButton"><h3>Article 2 - Console Functions</h3></div></a>
				</div>
			</div>
		</div>
		<div id="slider_chapterThree">
			<div class="button">
				<h3>Chapter 3 - Functions</h3>
			</div>
			<div class="masterSlide">
				<div class="subButton" data-targ="0"><h4 data-targ="0">Section 1 - Next Image</h4></div>
				<div class="subSlide" data-cont="0">
					<a href="#" class="seekButton" data-seek="760"><div class="deepButton"><h3>Article 1 - For Loop</h3></div></a>
					<a href="#" class="seekButton" data-seek="845"><div class="deepButton"><h3>Article 2 - Current Image</h3></div></a>
					<a href="#" class="seekButton" data-seek="885"><div class="deepButton"><h3>Article 3 - Cycling</h3></div></a>
					<a href="#" class="seekButton" data-seek="958"><div class="deepButton"><h3>Article 4 - Animation</h3></div></a>
				</div>
				<div class="subButton" data-targ="1"><h4 data-targ="1">Section 2 - Change Priority</h4></div>
				<div class="subSlide" data-cont="1">
					<a href="#" class="seekButton" data-seek="1100"><div class="deepButton"><h3>Article 1 - Animation Binding</h3></div></a>
					<a href="#" class="seekButton" data-seek="1284"><div class="deepButton"><h3>Article 2 - Remove Class</h3></div></a>
					<a href="#" class="seekButton" data-seek="1290"><div class="deepButton"><h3>Article 3 - Add Class</h3></div></a>
				</div>
				<div class="subButton" data-targ="2"><h4 data-targ="2">Section 3 - Previous Image</h4></div>
				<div class="subSlide" data-cont="2">
					<a href="#" class="seekButton" data-seek="1320"><div class="deepButton"><h3>Article 1 - Copy/Paste</h3></div></a>
					<a href="#" class="seekButton" data-seek="1342"><div class="deepButton"><h3>Article 2 - Reworking</h3></div></a>
				</div>
			</div>
		</div>
		<div id="slider_chapterFour">
			<div class="button">
				<h3>Chapter 4 - Final Thoughts</h3>
			</div>
			<div class="masterSlide">
				<a href="#" class="seekButton" data-seek="1430"><div class="subButton" data-targ="0"><h4 data-targ="0">Section 1 - Adding Links</h4></div></a>
				<div class="subSlide" data-cont="0"></div>
			</div>
		</div>
		<div id="slider_takeTest">
			<a href="http://www.pranamachine.com/prana/test/"><div class="button">
				<h3>Take the Test</h3>
			</div></a>
		</div>
	</div>

	<div id="content">
		<iframe content-type="video/mp4" src="http://player.vimeo.com/video/74582326?api=1;player_id=lessonVideo" id="lessonVideo" width="720" height="540" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
	</div>

</div>