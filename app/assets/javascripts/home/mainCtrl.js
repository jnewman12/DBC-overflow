App.controller('MainCtrl', [
	'$scope',
	'questions',
	function($scope, questions) {
		$scope.questions = questions.questions;
	}
])