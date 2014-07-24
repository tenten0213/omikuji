// Declare app level module which depends on filters, and services
angular.module('omikuji', ['ngResource', 'ngRoute', 'ui.bootstrap', 'ui.date'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home/home.html',
        controller: 'HomeController',
        resolve: {
          resolvedEntry: [
              'Entry', function (Entry) {
                  return Entry.query();
              }
          ]
        }
      })
      .otherwise({redirectTo: '/'});
  }]);
