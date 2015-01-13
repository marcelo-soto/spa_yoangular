'use strict';

/**
 * @ngdoc service
 * @name yoAngularApp.Producto
 * @description
 * # Producto
 * Factory in the yoAngularApp.
 */
angular.module('yoAngularApp')
  .factory('Producto', function ($resource) {
    return $resource(
      'http://localhost:4000/api/productos/:id',
      null,
      {
        'update': { method: 'PUT'}
      }
      );
  });
