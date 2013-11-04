<?php
	if (!empty($_GET['branch']) && !empty($_GET['lesson'])) {
		require 'modules/db_connect.php';
		$lesson = ORM::for_table('lessons')->where('tag', $_GET['lesson'])->find_one();
		$slideDirectory = 'modules/lessons/'.$_GET['branch'].'/'.$_GET['lesson'].'/'.$lesson->image_directory;
		if (glob($slideDirectory . '*.jpg')) {
			$numberOfSlides = count(glob($slideDirectory . '*.jpg'));
		}
	} else {
		echo 'Error - This lesson is invalid.';
	}
?>