(function () {
	'use strict';
	angular.module('myAng', [])

	.controller('myctrl', ['$scope', function ($scope) {
		$scope.message;
		$scope.list;
		$scope.chk = function () {
			var word = $scope.list.split(" ");
				$scope.message = 'Please enter data first';
			}
			if (word[3] == undefined) {
				$scope.message = 'Enjoy!';
			}
			else {
				$scope.message = 'Too much!';
			}
		}
	}]);
})();