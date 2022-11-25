// (function () {
// 	'use strict';
// 	angular.module('myFirstApp', [])
// 	.controller('myFirstController', function ($scope) {
// 		$scope.name="Mossab";
// 		$scope.sayHello=function () {
// 			return "Hello Coursera"
// 		}
// 	})
// })();


(function () {
	'strict use';

	angular.module('calcApp', [])

	.controller('nameCalc',['$scope', '$filter', function ($scope, 
																		$filter)
		{

		$scope.name="Mossab";
		$scope.numericValue=0;
		$scope.dnv = function () {
			var value = cnv($scope.name);
			$scope.numericValue = value;
		}
		function cnv(string) {
			var n=0;
			for (i=0; i<string.length; i++){
				n+= string.charCodeAt(i);
			}
			return n;
		}
		$scope.upper= function () {
			$scope.name= $filter('uppercase')($scope.name);
		}
	}])

})();

