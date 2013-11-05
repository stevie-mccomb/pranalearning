var app = angular.module('PranaLearning', ['ngResource'])

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
							},
							'1': {
								'name': 'JavaScript',
								'articles': {
									'0': {
										'name': 'Class Setup',
										'data-seek': '122'
									}
								}
							}
						}
					},
					'1': {
						'name': 'Initialize',
						'sections': {
							'0': {
								'name': 'Creating Assets',
								'articles': {
									'0': {
										'name': 'Slideshow Element'
									},
									'1': {
										'name': 'Arrows'
									},
									'2': {
										'name': 'Slides'
									}
								}
							},
							'1': {
								'name': 'Adding Action',
								'articles': {
									'0': {
										'name': 'Event Listeners'
									},
									'1': {
										'name': 'Console Functions'
									}
								}
							}
						}
					},
					'2': {
						'name': 'Functions',
						'sections': {
							'0': {
								'name': 'Next Image',
								'articles': {
									'0': {
										'name': 'For Loop'
									},
									'1': {
										'name': 'Current Image'
									},
									'2': {
										'name': 'Cycling'
									},
									'3': {
										'name': 'Animation'
									}
								}
							},
							'1': {
								'name': 'Change Priority',
								'articles': {
									'0': {
										'name': 'Animation Binding'
									},
									'1': {
										'name': 'Remove Class'
									},
									'2': {
										'name': 'Add Class'
									}
								}
							},
							'2': {
								'name': 'Previous Image',
								'articles': {
									'0': {
										'name': 'Copy/Paste'
									},
									'1': {
										'name': 'Reworking'
									}
								}
							}
						}
					},
					'3': {
						'name': 'Final Thoughts',
						'sections': {
							'0': {
								'name': 'Adding Links'
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
			scope.downloadSource = function(type) {
				switch(type) {
					case 'html':
						// nada
					break;
					case 'css':
						// nada
					break;
					default:
						// download all
					break;
				}
			}
		}
	}
}]);