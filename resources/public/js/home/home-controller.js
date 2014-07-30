'use strict';

angular.module('omikuji')
    .controller('HomeController', ['$scope', 'resolvedEntry',
        function ($scope, resolvedEntry) {
            $scope.entries = resolvedEntry;

            $scope.roulette = function (index) {
                $scope.tableshow = true;
                $scope.entries = _.shuffle($scope.entries);
                angular.forEach($scope.entries, function (value, key) {
                    setTimeout($scope.lines = value, 2000)
                });
            };

            $scope.nekohide = function () {
                $scope.tableshow = false;
            }
        }]);
