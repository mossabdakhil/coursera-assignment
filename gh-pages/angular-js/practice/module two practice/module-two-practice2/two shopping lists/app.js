(function () {
	'use strict';

	angular.module('ControllerAsApp', [])
	.controller('ShoppingListController1', ['ShoppingListFactory', ShoppingListController1])
	.controller('ShoppingListController2',['ShoppingListFactory', ShoppingListController2])
	.factory('ShoppingListFactory', ShoppingListFactory);

	function ShoppingListController1(ShoppingListFactory) {
		var list1 = this;

		// Use factory to create new shopping list service
		var shoppingList = ShoppingListFactory();
		list1.items = shoppingList.getItems();
		list1.itemName = "";
		list1.itemQuantity = "";

		list.addItem = function () {
			shoppingList.addItem(list1.itemName, list1.itemQuantity);
		};

		list.removeItem = function (itemIndex) {
					shoppingList.removeItem(itemIndex);
		};
	}



	function ShoppingListController2(ShoppingListFactory) {
		var list2 = this;

		// use factory to create new shopping list service
		var shoppingList = ShoppingListFactory(3);
		list2.items = shoppingList.getItems();
		list2.itemName = "";
		list2.itemQuantity = "";

		list2.addItem = function () {
			try {
				shoppingList.addItem(list2.itemName, list2.itemQuantity);
			} catch (error) {
				  list2.errorMessage = error.message;
				}
			}

			list2.removeItem = function (itemIndex) {
				shoppingList.removeItem(itemindex);
			}
		}
	



	function ShoppingListService(maxItem) {
		var service = this;

		var items = [];

		service.addItem = function (itemName, itemQuantity) {
			if ((maxItem === undefined) || 
					(maxItem !== undefined) && (items.length < maxItem)) {
				var item = {
					name: itemName,
					quantity: itemQuantity
				};
				items.push(item);
			}	
			else {
				throw new Error("Max Item (" + maxItem + ") reached.");
			}
		}
		service.removeItem = function (itemIndex) {
			items.splice(itemIndex, 1);
		};

		service.getItems = function () {
			return items;
		}
	}



	function ShoppingListFactory(maxItem) {
		var factory = function (maxItem) {
			return new ShoppingListService(maxItem);
		};

		return factory;
	}

})();