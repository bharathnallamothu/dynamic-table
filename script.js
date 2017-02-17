angular.module('myApp', ['dynamic.table'])
  .controller('myCtrl', ['$scope','$http','$timeout', function($scope,$http,$timeout) {

    $scope.personDetailsObject={};
  	$scope.personDetailsData=[];
    
    $scope.productTableStructure={};
  	$scope.productTableData=[];
    
    $http({
      method: 'GET',
      url: 'personDetailsStructure.json'
    }).then(function (response){
      $scope.personDetailsObject=response.data;
    });
    $http({
      method: 'GET',
      url: 'personDetailsData.json'
    }).then(function (response){
      $scope.personDetailsData=response.data;
    });
    
    
    $http({
      method: 'GET',
      url: 'productTableStructure.json'
    }).then(function (response){
      $scope.productTableStructure=response.data;
    });
    $http({
      method: 'GET',
      url: 'productTableData.json'
    }).then(function (response){
      $scope.productTableData=response.data;
    });
  }])