var app = angular.module('PranaLearning', [])

var LessonFactory = app.factory('LessonFactory', ['$rootScope', function($rootScope) {
	return {
		lessons: {
			'09j34faiwdmf': {
				'language': 'javascript',
				'videoUrl': 'http://player.vimeo.com/video/74582326?api=1;player_id=lessonVideo',
				'chapters': {
					'0': {
						'name': 'The Setup',
						'sections': {
							'0': {
								'name': 'The DOM',
								'articles': {
									'0': {
										'name': 'HTML',
										'data-seek': '48'
									},
									'1': {
										'name': 'CSS',
										'data-seek': '98'
									}
								}
							}
						}
					},
					'1': {
						'name': 'Initialize',
						'sections': {
							'0': {
								'name': 'JavaScript',
								'articles': {
									'0': {
										'name': 'Class Setup',
										'data-seek': '122'
									}
								}
							}
						}
					}
				}
			}
		}
	}
}]);

var sidebar = app.directive('sidebar', ['$rootScope', 'LessonFactory', function($rootScope, LessonFactory) {
	return {
		link: function(scope, elem) {
			scope.getLesson = function(lessonId) {
				scope.lesson = LessonFactory.lessons[lessonId];
			}
		}
	}
}]);

var slider = app.directive('slider', [function() {
	return {
		link: function(scope, elem) {
			scope.open = function() {
				console.log(elem);
			}
		}
	}
}]);