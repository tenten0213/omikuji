'use strict';

angular.module('omikuji')
    .controller('HomeController', ['$scope', 'resolvedEntry',
        function ($scope, resolvedEntry) {
            $scope.entries = resolvedEntry;
            $scope.lines = resolvedEntry;

            $scope.roulette = function () {
                $scope.entries = _.shuffle($scope.entries);
                angular.forEach($scope.entries, function (entry, key) {
                        setTimeout(function () {
                            $scope.lines.push(entry)
                        }, 3);
                    }
                )
                ;
            };

            $scope.nekohide = function () {
                angular.forEach($scope.lines, function (line, key) {
                    setTimeout(function () {
                        $scope.lines.pop(line)
                    }, 3);
                });
            }
        }])
;
