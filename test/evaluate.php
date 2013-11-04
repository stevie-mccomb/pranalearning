<?php

	if (!empty($_POST)) {
		// Check to make sure they entered an answer for everything:
		if ($_POST['q1'] && $_POST['q2'] && $_POST['q3'] && $_POST['q4'] && $_POST['q5'] && $_POST['q6'] && $_POST['q7'] && $_POST['q8']) {
			// Trim the answers:
			foreach($_POST as &$answer) {
				if (!is_array($answer)) {
					$answer = trim($answer);
				}
			}

			// Sanitize Textarea Answers:
			$answers = filter_input_array(INPUT_POST, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
			
			// Score variable:
			$score = 0;
			$totalPossible = 8;

			// Check their simple answers:
			foreach($answers as $answer) {
				switch ($answer) {
					case $answers['q1']:
						if ($answer == 'no') {
							$score += 1;
						}
					break;
					case $answers['q2']:
						if ($answer == 'b') {
							$score += 1;
						}
					break;
					case $answers['q3']:
						if ($answer == 'c') {
							$score += 1;
						}
					break;
					case $answers['q4']:
						// Written:
						if (strpos($answer, '&#60;script&#62;') !== false && strpos($answer, '&#60;/script&#62;') !== false && strpos($answer, 'var') !== false && strpos($answer, 'new') !== false) {
							$score += 1;
							$q4Correct = 1;
						} else {
							$q4Correct = 0;
						}
					break;
					case $answers['q5']:
						// Written:
						if (strpos($answer, 'for') !== false && strpos($answer, 'var') !== false && strpos($answer, 'i') !== false && strpos($answer, '&#60;') !== false && strpos($answer, 'items.length') !== false && strpos($answer, '++i') !== false && strpos($answer, '{') !== false && strpos($answer, '}') !== false && strpos($answer, 'console.log(items[i])') !== false) {
							$score += 1;
							$q5Correct = 1;
						} else {
							$q5Correct = 0;
						}
					break;
					case $answers['q6']:
						foreach ($answers['q6'] as $arrayAnswer) {
							if ($arrayAnswer == 'class' || $arrayAnswer == 'data-dash') {
								$score += 0.5;
							} else {
								$score -= 0.25;
							}
						}
					break;
					case $answers['q7']:
						foreach ($answers['q7'] as $arrayAnswer) {
							if ($arrayAnswer == 'a' || $arrayAnswer == 'b' || $arrayAnswer == 'c' || $arrayAnswer == 'd') {
								$score += 0.25;
							} else {
								$score -= 0.25;
							}
						}
					break;
					case $answers['q8']:
						//Written:
						$score += 1;
						$q8Correct = 1;
					break;
					default:
						// nada
					break;
				}
			}

			$percentage = $score / $totalPossible;
			$percentage = $percentage * 100;
			$percentage = round($percentage, 0, PHP_ROUND_HALF_UP);

			echo '<form id="scoreForm" action="score.php" method="post">';
				echo '<input type="hidden" name="q4Correct" value="'.$q4Correct.'"';
				echo '<input type="hidden" name="q5Correct" value="'.$q5Correct.'"';
				echo '<input type="hidden" name="q8Correct" value="'.$q8Correct.'"';
				echo '<input type="hidden" name="answers" value="'.$answers.'[]" />';
				echo '<input type="hidden" name="score" value="'.$score.'" />';
				echo '<input type="hidden" name="percentage" value="'.$percentage.'" />';
			echo '</form>';

			?> <script> document.getElementById('scoreForm').submit(); </script> <?php
		} else {
			//header('Location: index.php');
		}
	} else {
		//header('Location: index.php');
	}

?>