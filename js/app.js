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
app.directive('slideshow', ['$http', '$animate', '$timeout', '$rootScope', function($http, $animate, $timeout, $rootScope) {
	return {
		link: function(scope, elem) {
			$http.post('data/get-slides.php').success(function(data) {
				$rootScope.slides = data;
			});

			scope.displaySlides = false;

			/* ---- Resize Slides to Fit Window ---- */
			scope.getWindowWidth = function() {
				return window.innerWidth;
			};
			scope.$watch(scope.getWindowWidth, function(newVal, oldVal) {
				$rootScope.browserWidth = function() {
					return newVal;
				}
			});
			window.onresize = function() {
				scope.$apply();
			};
			/* ---- End Resize ---- */

			scope.slideRack = elem.children()[2];
			scope.startingWidth = scope.slideRack.offsetWidth;

			scope.rackWidth = function() {
				if (angular.isDefined(scope.slides)) {
					return scope.startingWidth * $rootScope.slides.length;
				}
			};

			$timeout(function() {
				scope.displaySlides = true;
			}, 2000);

			scope.getSlideDisplay = function() {
				if (scope.displaySlides == true) {
					return 'block';
				} else {
					return 'none';
				}
			};
		}
	}
}]);

app.directive('slideRack', ['$animate', '$timeout', '$rootScope', function($animate, $timeout, $rootScope) {
	return {
		restrict: 'C',
		link: function(scope, elem) {
			scope.gallery = {
				current: 0
			};

			var currentSlideMargin = 0;

			scope.slideMargin = function() {
				return currentSlideMargin;
			};

			scope.previous = function() {
				if (scope.animating) { return; }
				scope.animating = true;
				if (--scope.gallery.current < 0) {
					scope.gallery.current = $rootScope.slides.length - 1;
					currentSlideMargin = -($rootScope.browserWidth() * ($rootScope.slides.length - 1));
				} else {
					currentSlideMargin = currentSlideMargin + $rootScope.browserWidth();
				}
				$timeout(function() {
					scope.animating = false;
				}, 1000);
			};

			scope.next = function() {
				if (scope.animating) { return; }
				scope.animating = true;
				if (++scope.gallery.current > $rootScope.slides.length - 1) {
					scope.gallery.current = 0;
					currentSlideMargin = 0;
				} else {
					currentSlideMargin = currentSlideMargin - $rootScope.browserWidth();
				}
				$timeout(function() {
					scope.animating = false;
				}, 1000);
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