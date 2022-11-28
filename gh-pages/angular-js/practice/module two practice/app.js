(function () {
	'use strict';
	var app = angular.module('myApp', [])
	.controller('myCtrl', ['$scope', '$filter','ReplaceFilter' , function ($scope, $filter, ReplaceFilter) {
			$scope.fltr = function () {
			$scope.Filter1 = .45;
			$scope.Filter2 = 'nothing can stop me';
			$scope.Filter3 = function () {
			var m = ReplaceFilter('nothing can stop nobody');
			return m;
		}
	}

	// Watchers:
	$scope.onceCounter = 0;
	$scope.counter = 0;

	$scope.countOnce = function () {
		$scope.onceCounter = 1;
	}

	$scope.count = function () {
		setTimout (function () {
			counter ++;
		}, 2000);
	}	

	$scope.showNumberOfWatchers = function () {
		console.log("number of watchers is: " ,$$watchersCount);
	}

	// $scope.$watch('onceCounter', function (newvalue , oldvalue) {
	// 	console.log("onceCounters old value is: " + oldvalue);
	// 	console.log("onceCounters new value is: " + newvalue);
	// })

	// $scope.$watch('counter', function (newvalue , oldvalue) {
	// 	console.log("onceCounters old value is: " + oldvalue);
	// 	console.log("onceCounters new value is: " + newvalue);
	// })

	// $scope.$watch(function () {
	// 	console.log("digest cycle fired!")
	// })

	$scope.

	}])

	.filter('Replace', function repFilter() {
		return	function (input) {
			input = input || "";
			return input.replace("nothing", "everything");
		}
	})

	.filter('truth', function truthfltr() {
		return function (input, target, output) {
			input = input || "";
			return input.replace(target, output);
		}
	})
})();