(function () {
	'use strict';

	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService)

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService) {
		var list1 = this;
		list1.items = ShoppingListCheckOffService.getRequiredItems();
		list1.buyItem = function (itemIndex) {
			ShoppingListCheckOffService.buyItem(itemIndex);
		}
	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var list2 = this;
		list2.items = ShoppingListCheckOffService.getBoughtItems();
	}

	function ShoppingListCheckOffService() {
		var service = this;
		var tobuy = [
			{
				name: "cookies",
				quantity: 10
			},
			{
				name: "cakes",
				quantity: 4
			},
			{
				name: "apples",
				quantity: 55
			},
			{
				name: "batteries",
				quantity: 8
			},
			{
				name: "eggs",
				quantity: 6
			},
			{
				name: "nothingnesses",
				quantity: 9999
			}
		];
		var bought = [];
		service.buyItem = function (itemIndex) {
			bought.push(tobuy[itemIndex]);
			tobuy.splice(itemIndex, 1);
		}
		service.getRequiredItems = function () {
			return tobuy;
		}
		service.getBoughtItems = function () {
			return bought;
		}
	}

})();