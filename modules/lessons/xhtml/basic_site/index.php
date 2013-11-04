<script>
	document.addEvent('domready', function() {
		var chapterOne = new Slider('slider_chapterOne');
		var chapterTwo = new Slider('slider_chapterTwo', { hasSubMenu: true });
		var chapterThree = new Slider('slider_chapterThree', { hasSubMenu: true });
		var chapterFour = new Slider('slider_chapterFour', { hasSubMenu: true });
		var chapterFive = new Slider('slider_chapterFive', { hasSubMenu: true });
		var chapterSix = new Slider('slider_chapterSix', { hasSubMenu: true });
		var chapterSeven = new Slider('slider_chapterSeven');
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
				<h3>Chapter 2 - The Essentials</h3>
			</div>
			<div class="masterSlide">
				<div class="subButton" data-targ="0"><h4 data-targ="0">Section 1 - The What</h4></div>
				<div class="subSlide" data-cont="0">
					<div class="deepButton"><h3>Article 1 - Doctype</h3></div>
					<div class="deepButton"><h3>Article 2 - Head</h3></div>
					<div class="deepButton"><h3>Article 3 - Title</h3></div>
					<div class="deepButton"><h3>Article 4 - The HTML Tag</h3></div>
					<div class="deepButton"><h3>Article 5 - Body</h3></div>
				</div>
				<div class="subButton" data-targ="1"><h4 data-targ="1">Section 2 - The Why</h4></div>
				<div class="subSlide" data-cont="1">
					<div class="deepButton"><h3>Article 1 - The Doctype</h3></div>
					<div class="deepButton"><h3>Article 2 - Head</h3></div>
					<div class="deepButton"><h3>Article 3 - Title</h3></div>
					<div class="deepButton"><h3>Article 4 - The HTML Tag</h3></div>
					<div class="deepButton"><h3>Article 5 - Body</h3></div>
				</div>
			</div>
		</div>
		<div id="slider_chapterThree">
			<div class="button">
				<h3>Chapter 3 - Header</h3>
			</div>
			<div class="masterSlide">
				<div class="subButton" data-targ="0"><h4 data-targ="0">Section 1 - The Logo</h4></div>
				<div class="subSlide" data-cont="0">
					<div class="deepButton"><h3>Article 1 - Markup</h3></div>
					<div class="deepButton"><h3>Article 2 - Styles</h3></div>
				</div>
				<div class="subButton" data-targ="1"><h4 data-targ="1">Section 2 - The Navigation</h4></div>
				<div class="subSlide" data-cont="1">
					<div class="deepButton"><h3>Article 1 - Markup</h3></div>
					<div class="deepButton"><h3>Article 2 - Styles</h3></div>
				</div>
			</div>
		</div>
		<div id="slider_chapterFour">
			<div class="button">
				<h3>Chapter 4 - Sidebar</h3>
			</div>
			<div class="masterSlide">
				<div class="subButton" data-targ="0"><h4 data-targ="0">Section 1 - Thinking Ahead</h4></div>
				<div class="subSlide" data-cont="0"></div>
				<div class="subButton" data-targ="1"><h4 data-targ="1">Section 2 - Making it Happen</h4></div>
				<div class="subSlide" data-cont="1">
					<div class="deepButton"><h3>Article 1 - Markup</h3></div>
					<div class="deepButton"><h3>Article 2 - Styles</h3></div>
				</div>
			</div>
		</div>
		<div id="slider_chapterFive">
			<div class="button">
				<h3>Chapter 5 - Content</h3>
			</div>
			<div class="masterSlide">
				<div class="subButton" data-targ="0"><h4 data-targ="0">Section 1 - Content is King</h4></div>
				<div class="subSlide" data-cont="0"></div>
				<div class="subButton" data-targ="1"><h4 data-targ="1">Section 2 - Filling in the Holes</h4></div>
				<div class="subSlide" data-cont="1">
					<div class="deepButton"><h3>Article 1 - Markup</h3></div>
					<div class="deepButton"><h3>Article 2 - Styles</h3></div>
				</div>
			</div>
		</div>
		<div id="slider_chapterSix">
			<div class="button">
				<h3>Chapter 6 - Footer</h3>
			</div>
			<div class="masterSlide">
				<div class="subButton" data-targ="0"><h4 data-targ="0">Section 1 - Sitemap</h4></div>
				<div class="subSlide" data-cont="0">
					<div class="deepButton"><h3>Article 1 -Markup</h3></div> 
					<div class="deepButton"><h3>Article 2 -Styles</h3></div> 
				</div>
				<div class="subButton" data-targ="1"><h4 data-targ="1">Section 2 - Copyright Notice</h4></div>
				<div class="subSlide" data-cont="1">
					<div class="deepButton"><h3>Article 1 - Markup</h3></div>
					<div class="deepButton"><h3>Article 2 - Styles</h3></div>
				</div>
				<div class="subButton" data-targ="2"><h4 data-targ="1">Section 3 - Jazzing it Up</h4></div>
				<div class="subSlide" data-cont="2"></div>
			</div>
		</div>
		<div id="slider_chapterSeven">
			<div class="button"><h3>Chapter 7 - Final Thoughts</h3></div>
			<div class="masterSlide"></div>
		</div>
	</div>

	<div id="content">
		
	</div>

</div>