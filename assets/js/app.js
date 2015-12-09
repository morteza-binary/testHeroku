(function(){
	"use strict";
	angular
		.module("myApp", []);
	
	angular
		.module("myApp")
		.controller("myCtrl", myCtrl);

	myCtrl.$inject=[];
	function myCtrl(){
		var vm = this;
		vm.name = "Morteza";
	}
})(); 
