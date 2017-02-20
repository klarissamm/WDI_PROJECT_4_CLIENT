angular
  .module('avocado')
  .config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/js/views/home.html'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/js/views/register.html',
    controller: 'RegisterCtrl',
    controllerAs: 'register'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/js/views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'login'
  })
  .state('usersIndex', {
    url: '/users',
    templateUrl: '/js/views/users/index.html',
    controller: 'UsersIndexCtrl',
    controllerAs: 'usersIndex'
  })
  .state('userEdit', {
  url: '/user/edit',
  templateUrl: '/js/views/users/edit.html',
  controller: 'UsersEditCtrl',
  controllerAs: 'userEdit'
})
.state('userShow', {
  url: '/user/:id',
  templateUrl: '/js/views/users/show.html',
  controller: 'UserShowCtrl',
  controllerAs: 'userShow'
});

  $urlRouterProvider.otherwise('/');
}
