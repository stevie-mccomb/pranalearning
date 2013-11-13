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
		.when('/authors/:authorCode', {
			templateUrl: 'partials/author.html',
			controller: function($scope, $routeParams) {
				$scope.authorCode = $routeParams.authorCode;
			}
		})
		.when('/lessons/:language/:lessonName', {
			templateUrl: 'partials/lesson.html',
			controller: function($scope, $routeParams) {
				$scope.language = $routeParams.language;
				$scope.lessonName = $routeParams.lessonName;
			}
		})
		.when('/docs', {
			templateUrl: 'partials/docs.html'
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
			$http({
				method: 'POST',
				url:'data/get-lessons.php',
				data: scope.language,
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			}).success(function(data) {
				scope.lessons= data;
			});
		}
	}
}]);

app.directive('slider', ['$http', '$sce', function($http, $sce) {
	return {
		link: function(scope, elem) {
			$http({
				method: 'POST',
				url:'data/get-lesson.php',
				data: scope.lessonName,
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			}).success(function(data) {
				scope.lesson = data;
				scope.chapters = eval("(" + scope.lesson.chapters + ")");
				scope.videoUrl = $sce.trustAsResourceUrl(scope.lesson.videoUrl);
			});
			scope.openChapter = function(chapterName) {
				if (scope.chapterOpen == chapterName) {
					scope.chapterOpen = undefined;
				} else {
					scope.chapterOpen = chapterName;
				}
				scope.sectionOpen = undefined;
			}
			scope.openSection = function(sectionName) {
				if (scope.sectionOpen == sectionName) {
					scope.sectionOpen = undefined;
				} else {
					scope.sectionOpen = sectionName;
				}
			}
			scope.seekTo = function(seekValue) {
				var videoElement = document.getElementsByClassName('lesson-video')[0];
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

app.directive('authorContainer', ['$http', function($http) {
	return {
		link: function(scope, elem) {
			$http({
				method: 'POST',
				url:'data/get-author.php',
				data: scope.authorCode,
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			}).success(function(data) {
				scope.author = data;
			});
		}
	}
}]);