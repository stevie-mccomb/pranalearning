<?php
	
	require 'modules/idiorm.php';
	
	try {
		ORM::configure('mysql:host=pranamachinecom.netfirmsmysql.com;dbname=prana_learning');
		ORM::configure('username', 'amonhorus');
		ORM::configure('password', '$enviro78');
	} catch (Exception $e) {
		die ('Error connecting to the database.');
	}
	
?>