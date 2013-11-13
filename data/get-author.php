<?php

	$authorCode = file_get_contents("php://input");

	require 'idiorm.php';
	require 'db-connection.php';

	$authorData = ORM::for_table('authors')->where('code', $authorCode)->find_one();
		$author = new stdClass();
		$author->name = $authorData->name;
		$author->image = $authorData->image;
		$author->bio = $authorData->bio;
	print_r(json_encode($author));

?>