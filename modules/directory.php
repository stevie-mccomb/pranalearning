<?php

	if (!empty($_GET['doc'])) {
		include 'modules/docs/'.$_GET['doc'].'.php';
	} else if (!empty($_GET['branch']) && empty($_GET['lesson'])) {
		include 'modules/directory/'.$_GET['branch'].'.php';
	} else if (!empty($_GET['branch']) && !empty($_GET['lesson'])) {
		include 'modules/lessons/'.$_GET['branch'].'/'.$_GET['lesson'].'/index.php';
	} else { ?>
		<div id="directory">
			<div class="wrapper">
				<div class="directory_selection" data-disabled="true"><p>XHTML / CSS</p></div>
				<div class="directory_selection" data-disabled="true"><p>HTML5</p></div>
				<div class="directory_selection" data-disabled="true"><p>CSS3</p></div>
				<a href="?branch=javascript"><div class="directory_selection"><p>JavaScript</p></div></a>
				<div class="directory_selection" data-disabled="true"><p>PHP</p></div>
				<div class="directory_selection" data-disabled="true"><p>ActionScript</p></div>
			</div>
		</div> <?php
	}

?>