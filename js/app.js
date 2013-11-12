var app = angular.module('PranaLearning', ['ngRoute'])
	.config(viewRouter);

// Routes
function viewRouter($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'partials/home.html'
		})
		.when('/how-to-use', {
			templateUrl: 'partials/how-to-use.html'
		})
		.when('/language/:language', {
			templateUrl: 'partials/language.html',
			controller: function($scope, $routeParams) {
				$scope.language = $routeParams.language;
			}
		})
		.when('/lessons/:language/:lessonName',{
			templateUrl: 'partials/lesson.html',
			controller: function($scope, $routeParams) {
				$scope.language = $routeParams.language;
				$scope.lessonName = $routeParams.lessonName;
			}
		})
		.otherwise({templateUrl: 'partials/home.html'});
};

// Directives
app.directive('slideshow', ['$http', function($http) {
	return {
		link: function(scope, elem) {
			$http.post('data/get-slides.php').success(function(data) {
				scope.slides = data;
			});

			scope.gallery = {
				current: 0
			};

			scope.previous = function() {
				if (--scope.gallery.current < 0) {
					scope.gallery.current = 2;
				}
			};

			scope.next = function() {
				if (++scope.gallery.current > 2) {
					scope.gallery.current = 0;
				}
			};
		}
	}
}]);

app.directive('lessonsContainer', ['$http', function($http) {
	return {
		link: function(scope, elem) {
			/*$http({method: 'POST', url:'data/get-lessons.php', data: scope.language}).success(function(data) {
				scope.lessons= data;
			});*/
			$http.post('data/get-lessons.php', scope.language).success(function(data) {
				scope.lessons = data;
			});
		}
	}
}]);

app.directive('lessonContainer', [function() {
	return {
		link: function(scope, elem) {
			
		}
	}
}]);

var sidebar = app.directive('sidebar', ['$http', function($http) {
	return {
		link: function(scope, elem) {
			$http.post('data/get-lesson.php', scope.language).success(function(data) {
				scope.lesson = data;
			});
			/*scope.getLesson = function(lessonId) {
				scope.lesson = LessonFactory.lessons[lessonId];
			}
			scope.downloadSource = function(type) {
				var directory = scope.lesson.srcDirectory;
				switch(type) {
					case 'html':
						window.location = directory + 'html.zip';
					break;
					case 'css':
						window.location = directory + 'css.zip';
					break;
					default:
						// download all
						window.location = directory + 'src.zip';
					break;
				}
			}*/
		}
	}
}]);

var slider = app.directive('slider', ['$rootScope', '$timeout', function($rootScope, $timeout) {
	return {
		link: function(scope, elem) {
			scope.openChapter = function(chapterNum) {
				if (scope.chapterOpen == chapterNum) {
					scope.chapterOpen = undefined;
				} else {
					scope.chapterOpen = chapterNum;
				}
				scope.sectionOpen = undefined;
			}
			scope.openSection = function(sectionNum) {
				if (scope.sectionOpen == sectionNum) {
					scope.sectionOpen = undefined;
				} else {
					scope.sectionOpen = sectionNum;
				}
			}
			scope.seekTo = function(seekValue) {
				var videoElement = document.getElementById('lessonVideo');
				if (videoElement) {
					var url = videoElement.src.split('?')[0];
				}
				var data = new Object();
				data.method = 'seekTo';
				data.value = seekValue;
				videoElement.contentWindow.postMessage(JSON.stringify(data), url);
			}
		}
	}
}]);