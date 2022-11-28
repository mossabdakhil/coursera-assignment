(function () {
	'use strict';
	angular.module('myAng', [])

	.controller('myctrl', ['$scope', function ($scope) {
		$scope.message;
		$scope.list;
		$scope.chk = function () {
			if ($scope.list === undefined) {
				$scope.message = "Please enter data first"
			}
			else {

				if ($scope.list === "") {
				$scope.message = "Please enter data first"
				}
				else {
					var word = $scope.list.split(", ");
					if (word[3] == undefined) {
						$scope.message = 'Enjoy!';
					}
					else {
					$scope.message = 'Too much!';
					}
				}
			}
			console.log($scope.list);
		}
	}]);
})();