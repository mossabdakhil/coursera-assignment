var numarray = [1,2,3,4,5,6,7,8,9,10];
var newnumarray = numarray.filter(function (value) {
	return value > 5;
})
console.log(newnumarray);

var shoppingList1 = ["Milk","Donuts","Cookies","Chocolet","Peanut Butter","Peto Bismol","Peto Bismol (Chocolet flavor)","Peto Bismol (Cookie flavor"];
var newshoppingList1 = shoppingList1.filter(function (value) {
	return value.indexOf("Bismol") !== -1;
})
console.log(newshoppingList1);