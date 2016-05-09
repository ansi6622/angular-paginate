angular.module('AppExample')

  .controller('PhonebookCtrl', function ($scope) {

    // PhonebookCtrl

  })

  .directive('appPbSearch', function (pb) {

    return {
      scope: {},
      replace: true,
      controller: 'PhonebookCtrl as search',
      templateUrl: 'templates/pb.search.tmpl.html',
      link: function (scope, el, attrs, fn) {
        scope.search = {};
        scope.search.data = {};

        scope.search.findNumber = function () {
          var n = name || scope.search.name;
          scope.search.lastSearchedName = angular.copy(scope.search.name);
          scope.search.data.results = pb.findNumberByName(n);
          scope.search.data.resultCount = scope.search.data.results.length;
        };
      }
    }

  })

  .directive('appPbListings', function (pb) {

    return {
      bindToController: {
        displayResults: '='
      },
      replace: true,
      controller: 'PhonebookCtrl as listings',
      templateUrl: 'templates/pb.listings.tmpl.html',
      link: function (scope, el, attrs, fn) {
        var results = scope.displayResults || pb.listings;
        scope.listings.displayResults = results;
        scope.listings.totalItems = results.length;
        scope.listings.currentPage = 1;
        scope.listings.maxSize = 10;

        scope.listings.pageChanged = function () {
          console.log('fired');
        }
      }
    }

  });
