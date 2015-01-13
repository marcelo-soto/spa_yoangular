'use strict';

describe('Controller: PruebaCtrl', function () {

  // load the controller's module
  beforeEach(module('yoAngularApp'));

  var PruebaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PruebaCtrl = $controller('PruebaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
