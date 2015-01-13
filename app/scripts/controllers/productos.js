'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:ProductosCtrl
 * @description
 * # ProductosCtrl
 * Controller of the yoAngularApp
 */
angular.module('yoAngularApp')
  .controller('ProductosCtrl', function ($scope, Producto) {
   	$scope.reset = function(){
		$scope.selected = {};
		$scope.show_editor = false;  		
  	}
  	$scope.reset();

  	$scope.productos = Producto.query();

  	$scope.select = function(producto){
  		$scope.show_editor = true;
  		$scope.selected = angular.copy(producto);
  	};
  	$scope.save = function(producto){
  		var id = producto.id;
  		for (var i = 0; i < $scope.productos.length; i++) {
  			if (id == $scope.productos[i].id){
  				angular.extend($scope.productos[i], producto);
  				Producto.update({ id: id }, producto).$promise.then(function(){console.log("done")})['catch'](function(response) {
      				console.log(response.status);
    			});
  			}
  		};
  		$scope.reset();
  	};
  	$scope.cancel = function(){
  		$scope.reset();
  	};
  });
