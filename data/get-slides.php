<?php

	require 'idiorm.php';
	require 'db-connection.php';

	$slides = ORM::for_table('slides')->find_many();
	$finalSlides = Array();
	foreach($slides as $slide) {
		$singleSlide = new stdClass();
		$singleSlide->url = $slide->url;
		$singleSlide->alt = $slide->alt;
		array_push($finalSlides, $singleSlide);
	}
	echo json_encode($finalSlides);

?>