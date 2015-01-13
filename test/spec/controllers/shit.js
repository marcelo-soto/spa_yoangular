'use strict';

describe('Controller: ShitCtrl', function () {

  // load the controller's module
  beforeEach(module('yoAngularApp'));

  var ShitCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShitCtrl = $controller('ShitCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
