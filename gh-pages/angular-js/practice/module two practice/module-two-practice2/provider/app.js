(function () {
	'use strict';
	angular.module('ShoppingListApp', [])
	.controller('ShoppingListController', ['ShoppingListService','$scope' , function (ShoppingListService, $scope) {
		var list = this;
		list.shoppingList = ShoppingListService();
		list.itemName = "";
		list.itemQuantity = "";
		list.addItem = function () {
			try {
				shoppingList.addItem(itemName, itemQuantity);
			} catch (error) {
				list.errorMessage = error.message;
			}
		};
		list.removeItem = function (itemIndex) {
			shoppingList.removeItem(itemIndex);
		};
	}])
	.provider('ShoppingListService', function () {
		var provider = this;
		provider.defaults = {
			maxItem : 10
		}
		provider.$get = function () {
			var shoppingList = new ShoppingListService(provider.defaults.maxItem);
		};
		return shoppingList;
	});

	function ShoppingListService(maxItem) {
		var service = this;

		var items = [];

		service.addItem = function (itemName, itemQuantity) {
			if ((maxItem === undefined) || (maxItem !== undefined) && (items.length < maxItem)) {
				var item = {
					name: itemName,
					quantity: itemQuantity
				};
				items.push(item);
			} else {
				throw new Error("Max items (" + maxItem + ") is reached!");
			}

			service.getItems = function () {
				return items;
			}

			service.removeItem = function (itemIndex) {
				items.splice(itemIndex, 1);
			}
		}
	}

})();