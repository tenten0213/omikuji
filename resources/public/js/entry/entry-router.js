'use strict';

angular.module('omikuji')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/entries', {
        templateUrl: 'views/entry/entries.html',
        controller: 'EntryController',
        resolve:{
          resolvedEntry: ['Entry', function (Entry) {
            return Entry.query();
          }]
        }
      })
    }]);
