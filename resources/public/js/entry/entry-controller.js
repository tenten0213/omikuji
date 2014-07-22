'use strict';

angular.module('omikuji')
  .controller('EntryController', ['$scope', '$modal', 'resolvedEntry', 'Entry',
    function ($scope, $modal, resolvedEntry, Entry) {

      $scope.entries = resolvedEntry;

      $scope.create = function () {
        $scope.clear();
        $scope.open();
      };

        $scope.roulette = function () {
            var i = resolvedEntry.length;
            while(i) {
                var j = Math.floor(Math.random() * i);
                var t = $scope.entries[--i];
                $scope.entries[i] = $scope.entries[j];
                $scope.entries[j] = t;
            }
            return $scope.entries;
        };

      $scope.update = function (id) {
        $scope.entry = Entry.get({id: id});
        $scope.open(id);
      };

      $scope.delete = function (id) {
        Entry.delete({id: id},
          function () {
            $scope.entries = Entry.query();
          });
      };

      $scope.save = function (id) {
        if (id) {
          Entry.update({id: id}, $scope.entry,
            function () {
              $scope.entries = Entry.query();
              $scope.clear();
            });
        } else {
          Entry.save($scope.entry,
            function () {
              $scope.entries = Entry.query();
              $scope.clear();
            });
        }
      };

      $scope.clear = function () {
        $scope.entry = {
          
          "name": "",
          
          "title": "",
          
          "id": ""
        };
      };

      $scope.open = function (id) {
        var entrySave = $modal.open({
          templateUrl: 'entry-save.html',
          controller: EntrySaveController,
          resolve: {
            entry: function () {
              return $scope.entry;
            }
          }
        });

        entrySave.result.then(function (entity) {
          $scope.entry = entity;
          $scope.save(id);
        });
      };
    }]);

var EntrySaveController =
  function ($scope, $modalInstance, entry) {
    $scope.entry = entry;

    

    $scope.ok = function () {
      $modalInstance.close($scope.entry);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  };
