<div id="container" style="padding: 32px; box-sizing: border-box; -moz-box-sizing: border-box;">

<?php
	if (!empty($_POST)) {
		if ($_POST['percentage'] >= 70) {
			echo '<h2 class="green">Final Score: '.$_POST['percentage'].'&#37; - You Passed!</h2>';
		} else {
			echo '<h2 class="red">Final Score: '.$_POST['percentage'].'&#37; - You Did Not Pass</h2>';
		}

		// Buttons
		if ($_POST['percentage'] < 70) {
			echo '<a href="index.php" style="text-decoration: none;"><button type="button" class="gel-button" style="display:block; margin-top: 32px;">Return Home</button></a>';
		} else {
			echo '<a href="index.php" style="text-decoration: none;"><button type="button" class="gel-button" style="display: block; margin-top: 32px;">Retry</button></a>';
		}
	} else {
		header('Location: index.php');
	}

?>

</div>