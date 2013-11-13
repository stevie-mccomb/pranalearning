<?php

	$givenLanguage = file_get_contents("php://input");

	require 'idiorm.php';
	require 'db-connection.php';

	$lessons = ORM::for_table('lessons')->find_many();
	$finalLessons = Array();
	foreach($lessons as $lesson) {
		$singleLesson = new stdClass();
		$singleLesson->language = $lesson->language;
		$singleLesson->name = $lesson->name;
		$singleLesson->videoUrl = $lesson->videoUrl;
		$singleLesson->chapters = $lesson->chapters;
		if ($singleLesson->language == $givenLanguage) {
			array_push($finalLessons, $singleLesson);
		}
	}
	echo json_encode($finalLessons);

?>