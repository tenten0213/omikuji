'use strict';

angular.module('omikuji')
.controller('HomeController', ['$scope', '$timeout', 'resolvedEntry',
  function ($scope, $timeout, resolvedEntry) {
    $scope.entries = resolvedEntry;
     _.map($scope.entries, function (entry, index) {
       entry.rank = index;
       console.log(entry);
     });

   $scope.roulette = function () {
     _.map($scope.entries, function (entry) {
       entry.rank = 0.5 - Math.random();
     });
   };
  }]);
