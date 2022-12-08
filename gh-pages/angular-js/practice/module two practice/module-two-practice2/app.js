// var parent = {
// 	value : "parentValue",
// 	obj : {
// 		objValue : "parentObjValue"
// 	},
// 	walk : function () {
// 		console.log("walking");
// 	}
// }

// var child = Object.create(parent);
// console.log("child's value: ", child.value);
// console.log("parent's value: ", parent.value);
// console.log("child's obj value is: ", child.obj.objValue);
// console.log("parent's obj value is: ", parent.obj.objValue);
// console.log(parent);
// console.log(child);

// child.value = "childValue";
// child.obj.objValue = "childObjValue";
// console.log("CHANGED childObjValue");
// console.log("CHANGED childvalue");
// console.log("child's value after the change: ", child.value);
// console.log("parent's value: ", parent.value);
// console.log("child's obj value after the change is: ", child.obj.objValue);
// console.log("parent's obj value is: ", parent.obj.objValue);
// console.log(parent);
// console.log(child);
// console.log("is child.obj === parent.obj?", child.obj === parent.obj);
// var grandChild = Object.create(child);
// console.log("grand child is: ", grandChild);
// grandChild.walk();
// function Dog(name) {
// 	this.name = name;
// 	console.log("'this' is: ",this);
// }

// var myDog = new Dog("Max");
// console.log("myDog is: ", myDog);
// Dog("Max");

(function () {
	'use strict';

	var app = angular.module('ControllerAsApp', [])

	.controller('ParentController1', ParentController1)
	.controller('ChildController1', ChildController1)
	.controller('ParentController2', ParentController2)
	.controller('ChildController2', ChildController2);


	ParentController1.$inject = ['$scope'];
	function ParentController1($scope) {
		$scope.parentValue = 1;
		$scope.pc = this;
		$scope.pc.parentValue = 1;
	}

	ChildController1.$inject = ['$scope'];
	function ChildController1($scope) {
		// console.log("parentValue is: ", $scope.parentValue);
		// console.log("CHILD $scope is:", $scope);



		// $scope.parentValue = 5;
		// console.log("*** CHANGED: $scope.parentValue = 5 ***");
		// console.log("$scope.parentValue is: ", $scope.parentValue);
		// console.log($scope);



		// console.log("$scope.pc.parentValue is: ", $scope.pc.parentValue);
		// $scope.pc.parentValue = 5;
		// console.log("$scope.pc.parentValue is: ", $scope.pc.parentValue);
		// console.log("$scope is: ", $scope);
		// console.log("$scope.$parent.parentValue: ",$scope.$parent.parentValue);

	}



	ParentController2.$inject = ['$scope'];
	function ParentController2($scope) {
		var parent = this;
		parent.value = 1;	
	}



	ChildController2.$inject = ['$scope'];
	function ChildController2($scope) {
		var child = this;
		child.value = 5;
		console.log("ChildController2 $scope is: ", $scope);
	}

})();