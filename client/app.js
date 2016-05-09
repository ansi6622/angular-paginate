angular.module('AppExample', ['ui.bootstrap','ngRoute','ngAnimate']);

angular.module('AppExample').config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl : 'views/main.html'
            }).otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode(true);
    });

angular.module('AppExample').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };
});
