(function () {
	'use strict';

	var shoppingList1 = ["Milk","Donuts","Cookies","Chocolet","Peanut Butter","Peto Bismol","Peto Bismol (Chocolet flavor)","Peto Bismol (Cookie flavor"];

	var shoppingList2 = [
	{
		name: "Milk",
		quantity: "2"
	},
	{
		name: "Donuts",
		quantity: "200"
	},
	{
		name: "Cookies",
		quantity: "300"
	},
	{
		name: "Cocolet",
		quantity: "5"
	}
];
	

	var app = angular.module('myApp', [])
	.controller('myCtrl', ['$scope', '$filter','ReplaceFilter' ,'$timeout', function ($scope, $filter, ReplaceFilter, $tismeout) {

		$scope.shoppingList1 = shoppingList1;
		$scope.shoppingList2 = shoppingList2;

		$scope.addNewItem = function () {
			var newItem = 
			{
				name: $scope.newItemName,
				quantity: $scope.newItemQuantity
			};
			$scope.shoppingList2.push(newItem);
		}


			$scope.firstName = "Mossaab";
			// $scope.fullName = "";

			$scope.fltr = function () {
			$scope.Filter1 = .45;
			$scope.Filter2 = 'nothing can stop me';
			$scope.Filter3 = function () {
			var m = ReplaceFilter('nothing can stop nobody');
			return m;
		}
	}

	// one time binders!:

	$scope.onceCounter = 0;
	$scope.counter = 0;

	$scope.setFullName = function () {
		$scope.fullName = $scope.firstName + " " + "Dakhil";	
	}

	$scope.logFirstName = function () {
		console.log("First name is: ", $scope.firstName);
	}

	$scope.logFullName = function () {
		console.log("Full name is: ", $scope.fullName);
	}


	// just to differenciate


	// Watchers:

	$scope.countOnce = function () {
		$scope.onceCounter = 1;
	}

	$scope.count = function () {
		$timeout(function () {
			$scope.counter ++;
				console.log("counter incremented!");
		}, 2000);
	}

	// $scope.count = function () {
	// 	setTimeout(function () {
	// 		$scope.$apply(function () {
	// 			$scope.counter ++;
	// 			console.log("counter incremented!")
	// 		})	
	// 	}, 2000);
	// }	

	// $scope.count = function () {
	// 	setTimeout(function () {
	// 		$scope.counter ++;
	// 		$scope.$digest();
	// 	}, 2000);
	// }	

	$scope.showNumberOfWatchers = function () {
		console.log("number of watchers is: ", $scope.$$watchersCount);
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