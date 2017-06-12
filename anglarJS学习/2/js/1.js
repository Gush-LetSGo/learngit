angular.module("myApp",[])

.controller('MainController',function($scope){
	$scope.userdata={};
	$scope.submitForm=function(){
		console.log($scope.userdata);
		alert("aa");
	}
})