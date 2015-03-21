var app = angular.module("myApp", ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: './login.html',
		controller: 'homeCtrl'
	})
	.when('/voters', {
		templateUrl: './home.html',
		controller: 'homeCtrl'
	})
	.when('/politicianbox', {
		templateUrl: './home.html',
		controller: 'homeCtrl'
	})
	.when('/interest-group', {
		templateUrl: './home.html',
		controller: 'homeCtrl'
	})
	.when('/press', {
		templateUrl: './home.html',
		controller: 'homeCtrl'
	})
	.when ('/error', {
			template : '<p class="error-msg">OOPS! - Seems like this page doesn\'t exist!</p>'
	})
	.otherwise ({
			redirectTo : '/error'
	});

}]);

app.run(function($rootScope, $location, $timeout) {
	$rootScope.$on('$routeChangeError', function() {
		$location.path('/error');
	});
	$rootScope.$on('$routeChangeStart', function() {
		$rootScope.isLoading = true;
	});
	$rootScope.$on('$routeChangeSuccess', function() {
		$timeout(function() {
			$rootScope.isLoading = false;
		}, 1000);
	});
});

app.controller ('homeCtrl', function() {

});








