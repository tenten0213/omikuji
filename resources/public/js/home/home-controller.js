'use strict';

angular.module('omikuji')
    .controller('HomeController', ['$scope', 'resolvedEntry',
        function ($scope, resolvedEntry) {
            $scope.entries = resolvedEntry;
            $scope.lines = resolvedEntry;

            $scope.roulette = function () {
                $scope.entries = _.shuffle($scope.entries);
                angular.forEach($scope.entries, function (entry, key) {
                        $scope.lines.push(entry)
                    }
                );
            };

            $scope.nekohide = function () {
                angular.forEach($scope.lines, function (value, key) {
                    setTimeout(function () {
                        $scope.lines.pop(value)
                    }, 3);
                });
            }
        }]);
