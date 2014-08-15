// script.js

	// create the module and name it myApp
        // also include ngRoute for all our routing needs
	var myApp = angular.module('myApp', ['ngRoute']);

	// configure our routes
	myApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'views/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'views/about.html',
				controller  : 'aboutController'
			})
			
			.when('/wedding-party', {
				templateUrl : 'views/wedding-party.html',
				controller  : 'weddingPartyController'
			})
			
			.when('/photos', {
				templateUrl : 'views/photos.html',
				controller  : 'photosController'
			})

			.when('/festivities', {
				templateUrl : 'views/festivities.html',
				controller  : 'festivitiesController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'views/contact.html',
				controller  : 'contactController'
			});
	});

	// create the controller and inject Angular's $scope
	myApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Welcome Home';
	});

	myApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});
	
	myApp.controller('weddingPartyController', function($scope) {
		$scope.message = 'This is for the wedding party.';
	});
	
	myApp.controller('photosController', function($scope) {
		$scope.message = 'This is for the photos.';
	});

	myApp.controller('festivitiesController', function($scope) {
		$scope.message = 'This is for the photos.';
	});
	
	myApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});