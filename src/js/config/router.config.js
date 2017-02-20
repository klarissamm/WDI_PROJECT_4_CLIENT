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
    url: '/users/edit',
    templateUrl: '/js/views/users/edit.html',
    controller: 'UsersEditCtrl',
    controllerAs: 'userEdit'
  })
.state('userShow', {
  url: '/users/:id',
  templateUrl: '/js/views/users/show.html',
  controller: 'UserShowCtrl',
  controllerAs: 'userShow'
})
.state('periodsIndex', {
  url: '/periods',
  templateUrl: '/js/views/periods/index.html',
  controller: 'PeriodsIndexCtrl',
  controllerAs: 'periodsIndex'
})
.state('periodNew', {
  url: '/periods/new',
  templateUrl: '/js/views/periods/new.html',
  controller: 'PeriodsNewCtrl',
  controllerAs: 'periodNew'
})
.state('periodShow', {
  url: '/periods/:id',
  templateUrl: '/js/views/periods/show.html',
  controller: 'PeriodsShowCtrl',
  controllerAs: 'periodShow'
});

  $urlRouterProvider.otherwise('/');
}
