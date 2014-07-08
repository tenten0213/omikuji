'use strict';

angular.module('omikuji')
  .factory('Entry', ['$resource', function ($resource) {
    return $resource('omikuji/entries/:id', {}, {
      'query': { method: 'GET', isArray: true},
      'get': { method: 'GET'},
      'update': { method: 'PUT'}
    });
  }]);
