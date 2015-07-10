var App = angular.module('dbcOverflow', ['ui.router', 'templates']);

App.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$stateProvider
		.state('home', {
			url: "/home",
			templateUrl: "home/_home.html",
			controller: 'MainCtrl',
			resolve: {
			  postPromise: ['questions', function(questions){
			    return questions.getAll();
			  }]
			}
		})
		$urlRouterProvider.otherwise('home');
	}
])



// App.config([
// 	'$stateProvider',
// 	'$urlRouterProvider',
// 	function($stateProvider, $urlRouterProvider) {
// 		$stateProvider
// 		// states are the routes
// 		.state('home', {
// 			url: '/home',
// 			templateUrl: 'home/_home.html',
// 			controller: 'MainCtrl',
// 			resolve: {
// 				postPromise: ['posts', function(posts){
// 					// our posts service
// 					return posts.getAll();
// 				}]
// 			}
// 		})
// 		.state('posts', {
// 			// route parameter similar to :id in sinatra
// 			url: '/posts/{id}',
// 			templateUrl: 'posts/_posts.html',
// 			controller: 'PostsCtrl',
// 			resolve: {
// 				post: ['$stateParams', 'posts', function($stateParams, posts) {
// 					return posts.get($stateParams.id);
// 				}]
				
// 				The Angular ui-router detects we are entering the posts state and will then automatically query the server for 
// 				the full post object, including comments. Only after the request has returned will the state finish loading.
				
// 			}
// 		})
// 		.state('login', {
// 			url: '/login',
// 			templateUrl: 'auth/_login.html',
// 			controller: 'AuthCtrl',
// 			onEnter: ['$state', 'Auth', function($state, Auth) {
//             Auth.currentUser().then(function (){
//             $state.go('home');
//            })
//           }]
// 		})
// 		.state('register', {
// 			url: '/register',
// 			templateUrl: 'auth/_register.html',
// 			controller: 'AuthCtrl',
// 			onEnter: ['$state', 'Auth', function($state, Auth) {
//             Auth.currentUser().then(function (){
//             $state.go('home');
//             })
//           }]
// 		})

// 	$urlRouterProvider.otherwise('home');	
// }])