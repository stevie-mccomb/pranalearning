<?php

	$lessonName = json_decode(file_get_contents("php://input"));
	$lessonName = 'Making a Slideshow';

	require 'idiorm.php';
	require 'db-connection.php';

	$lesson = ORM::for_table('lessons')->where('name', $lessonName)->find_one();
		$singleLesson = new stdClass();
		$singleLesson->name = $lesson->name;
		$singleLesson->videoUrl = $lesson->videoUrl;
		$singleLesson->chapters = $lesson->chapters;
	print_r(json_encode($singleLesson));

?>