<script>
	document.addEvent('domready', function() {
		var chapterOne = new Slider('slider_chapterOne');
		var chapterTwo = new Slider('slider_chapterTwo', { hasSubMenu: true });
		var chapterThree = new Slider('slider_chapterThree', { hasSubMenu: true });
		var chapterFour = new Slider('slider_chapterFour');
	});
</script>

<div id="container">

	<div id="sidebar">
		<div id="slider_chapterOne">
			<div class="button"><h3>Chapter 1 - Overview</h3></div>
			<div class="masterSlide"></div>
		</div>
		<div id="slider_chapterTwo">
			<div class="button">
				<h3>Chapter 2 - What is it?</h3>
			</div>
			<div class="masterSlide">
				<div class="subButton" data-targ="0"><h4 data-targ="0">Section 1 - The Purpose</h4></div>
				<div class="subSlide" data-cont="0"></div>
				<div class="subButton" data-targ="1"><h4 data-targ="1">Section 2 - Why is it Unique?</h4></div>
				<div class="subSlide" data-cont="1">
					<div class="deepButton"><h3>Article 1 - XHTML vs. HTML</h3></div>
				</div>
			</div>
		</div>
		<div id="slider_chapterThree">
			<div class="button">
				<h3>Chapter 3 - What is it not?</h3>
			</div>
			<div class="masterSlide">
				<div class="subButton" data-targ="0"><h4 data-targ="0">Section 1 - Lack of Features</h4></div>
				<div class="subSlide" data-cont="0">
					<div class="deepButton"><h3>Article 1 - Styling</h3></div>
					<div class="deepButton"><h3>Article 2 - Movement</h3></div>
					<div class="deepButton"><h3>Article 3 - Dynamicity</h3></div>
				</div>
				<div class="subButton" data-targ="1"><h4 data-targ="1">Section 2 - Solutions</h4></div>
				<div class="subSlide" data-cont="1">
					<div class="deepButton"><h3>Article 1 - CSS</h3></div>
					<div class="deepButton"><h3>Article 2 - JavaScript</h3></div>
					<div class="deepButton"><h3>Article 3 - PHP</h3></div>
				</div>
			</div>
		</div>
		<div id="slider_chapterFour">
			<div class="button"><h3>Chapter 4 - Let's Get Started!</h3></div>
			<div class="masterSlide"></div>
		</div>
	</div>

	<div id="content">
		<?php require 'modules/slide_counter.php'; ?>
		<script> var slideshow = new Slideshow('content', '<?php echo $slideDirectory; ?>', <?php echo $numberOfSlides; ?>); </script>
	</div>

</div>