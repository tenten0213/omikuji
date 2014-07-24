'use strict';

angular.module('omikuji')
  .controller('HomeController', ['$scope', 'resolvedEntry',
        function ($scope, resolvedEntry) {
            $scope.entries = resolvedEntry;

            $scope.roulette = function () {
                $scope.entries = _.shuffle($scope.entries)
            };
  }]);
