var app = angular.module('PranaLearning', [])

var LessonFactory = app.factory('LessonFactory', ['$rootScope', function($rootScope) {
	return {
		lessons: {
			'09j34faiwdmf': {
				'language': 'javascript',
				'videoUrl': 'http://player.vimeo.com/video/74582326?api=1;player_id=lessonVideo',
				'srcDirectory': 'modules/lessons/javascript/slideshow/',
				'chapters': {
					'0': {
						'name': 'The Setup',
						'sections': {
							'0': {
								'name': 'The DOM',
								'articles': {
									'0': {
										'name': 'HTML',
										'seek': '48'
									},
									'1': {
										'name': 'CSS',
										'seek': '98'
									}
								}
							},
							'1': {
								'name': 'JavaScript',
								'articles': {
									'0': {
										'name': 'Class Setup',
										'seek': '122'
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
										'name': 'Slideshow Element',
										'seek': '390'
									},
									'1': {
										'name': 'Arrows',
										'seek': '460'
									},
									'2': {
										'name': 'Slides',
										'seek': '514'
									}
								}
							},
							'1': {
								'name': 'Adding Action',
								'articles': {
									'0': {
										'name': 'Event Listeners',
										'seek': '640'
									},
									'1': {
										'name': 'Console Functions',
										'seek': '694'
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
										'name': 'For Loop',
										'seek': '760'
									},
									'1': {
										'name': 'Current Image',
										'seek': '845'
									},
									'2': {
										'name': 'Cycling',
										'seek': '885'
									},
									'3': {
										'name': 'Animation',
										'seek': '958'
									}
								}
							},
							'1': {
								'name': 'Change Priority',
								'articles': {
									'0': {
										'name': 'Animation Binding',
										'seek': '1100'
									},
									'1': {
										'name': 'Remove Class',
										'seek': '1284'
									},
									'2': {
										'name': 'Add Class',
										'seek': '1290'
									}
								}
							},
							'2': {
								'name': 'Previous Image',
								'articles': {
									'0': {
										'name': 'Copy/Paste',
										'seek': '1320'
									},
									'1': {
										'name': 'Reworking',
										'seek': '1342'
									}
								}
							}
						}
					},
					'3': {
						'name': 'Final Thoughts',
						'sections': {
							'0': {
								'name': 'Adding Links',
								'seek': '1430'
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