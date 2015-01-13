'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the yoAngularApp
 */
angular.module('yoAngularApp')
  .controller('NavigationCtrl', function ($scope, $location) {
	$scope.isActive = function(route) { return route === $location.path(); }
  });
