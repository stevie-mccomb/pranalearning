document.addEvent('domready', function() {
	var videoElement = document.getElementById('lessonVideo');
	if (videoElement) {
		var url = videoElement.get('src').split('?')[0]
	}

	var seekButtons = document.getElements('.seekButton');
	seekButtons.addEvent('click', seekTo);

	function seekTo(e) {
		if (e.target.getProperty('data-seek')) {
			var seekValue = e.target.getProperty('data-seek');
		} else if (e.target.parentElement.getProperty('data-seek')) {
			var seekValue = e.target.parentElement.getProperty('data-seek');
		} else if (e.target.parentElement.parentElement.getProperty('data-seek')) {
			var seekValue = e.target.parentElement.parentElement.getProperty('data-seek');
		} else {
			var seekValue = '1';
		}
		var data = new Object();
		data.method = 'seekTo';
		data.value = seekValue;
		videoElement.contentWindow.postMessage(JSON.stringify(data), url);
	}
});