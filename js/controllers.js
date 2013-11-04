app.controller('LessonCtrl', ['$rootScope', '$scope', 'LessonFactory', function($rootScope, $scope, LessonFactory) {
	$scope.getLesson = function(lessonId) {
		$rootScope.currentLesson = lessonId;
	}
}]);