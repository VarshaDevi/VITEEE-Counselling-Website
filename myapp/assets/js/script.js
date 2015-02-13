	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'mainController'
			})

			// route for the course page
			.when('/courses', {
				templateUrl : 'pages/courses.html',
				controller  : 'coursesController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			})
			// route for the counselling schedule page
			.when('/counselling', {
				templateUrl : 'pages/counselling.html',
				controller  : 'counsellingController'
			})
			// route for the checkstatus
			.when('/checkstatus', {
				templateUrl : 'pages/checkstatus.html',
				controller  : 'checkstatusController'
			})
    // route for the studentform
    .when('/studentform/:id', {
				templateUrl : 'pages/studentform.html',
				controller  : 'studentformController'
			})
	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'VIT University is a progressive educational institution that is dedicated to the pursuit of excellence. Students here are encouraged on this journey by our committed faculty, world-class facilities and student-friendly educational systems. VIT University was founded in 1984 by Dr. G. Viswanathan, a former parliamentarian and minister in the Tamil Nadu Government, as a self-financing institution called the ‘Vellore Engineering College’. Since then the institution has grown from strength to strength. Conferred as a ‘Deemed University’ in 2001 by the UMHRD, VIT University currently offers 62 degree programs to over 29,000 students in its 2 campuses at Vellore and Chennai.!';
	});

	scotchApp.controller('coursesController', function($scope) {

		$scope.message = 'List of Courses available for 2015';
		$scope.course = [{"id":1,"name":"Aeronautical Engineering","Seat":"120 seats"},
						  {"id":2,"name":"Computer Science Engineering","Seat":"80 seats"},
						  {"id":3,"name":"Civil Engineering","Seat":"120 seats"},
                          {"id":4,"name":"Electrical & Electronics Engineering","Seat":"80 seats"},
                          {"id":5,"name":"Electronics & Communication Engineering","Seat":"80 seats"},
                          {"id":6,"name":"Mechanical Engineering","Seat":"100 seats"},
                          {"id":7,"name":"Textile Engineering","Seat":"120 seats"},
                          {"id":8,"name":"Information Technology","Seat":"80 seats"},
                          {"id":9,"name":"Fashion Technology","Seat":"80 seats"},
                          {"id":10,"name":"Bio-Technology","Seat":"80 seats"},
            ];
	});

	scotchApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! ';
		});

	scotchApp.controller('counsellingController', function($scope) {
		$scope.message = 'Contact us! ';
	});
	scotchApp.controller('checkstatusController', function($scope) {
		$scope.message = 'Contact us! ';
    $scope.student=function(){       
       console.log("DSfdsf");
       
       console.log($scope.resp);
    }
		});
   scotchApp.controller('studentformController', function($scope, $http, $routeParams) {
		$scope.message = 'Here are you details!!! ';
       var id = $routeParams.id;
      $http.get('http://varshav-189517.apse1.nitrousbox.com:4000/find/student?id='+id).success(function(data){
             console.log(data);
             $scope.data = data;
       }); 
		});                  
