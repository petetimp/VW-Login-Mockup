var app = angular.module("myApp", ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: './login.html',
		controller: 'homeCtrl'
	})
	.when('/portals', {
		templateUrl: './home.html',
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
	.when('/civil-liberties', {
		templateUrl: './outlines.html',
		controller: 'civilCtrl'
	})
	.when('/cl-background', {
		templateUrl: './backgrounds.html',
		controller: 'backgroundCtrl'
	})
	.when('/questions', {
		templateUrl: './questions.html',
		controller: 'questionsCtrl'
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

app.controller ('civilCtrl',[ '$scope', function($scope) {
	$scope.title = 'Civil Liberties';
	$scope.talkingPointsImage = 'img/CIVIL_LIBERTIES.svg';
}]);

app.controller ('backgroundCtrl',[ '$scope', function($scope) {
	$scope.info = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum maximus metus urna. Vivamus sit amet mi eros. Cras fermentum enim eros, ac sodales lectus gravida ac. Nullam ex magna, luctus non massa id, aliquet blandit felis. Nulla dapibus non tellus ut finibus. Donec tristique tristique interdum. Fusce molestie blandit purus in commodo. Fusce ac pulvinar ex. Phasellus ut suscipit justo. Cras at facilisis velit. Nam dignissim nibh sed lorem faucibus, eget volutpat justo elementum.';
	$scope.privacy = "privacy";
	$scope.questions = 20;
}]);

app.controller ('questionsCtrl',[ '$scope', function($scope) {
	$scope.info = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum maximus metus urna. Vivamus sit amet mi eros. Cras fermentum enim eros, ac sodales lectus gravida ac. Nullam ex magna, luctus non massa id, aliquet blandit felis. Nulla dapibus non tellus ut finibus. Donec tristique tristique interdum.';
	$scope.privacy = "privacy";
	$scope.current = 1;
	$scope.total = 20;
}]);





