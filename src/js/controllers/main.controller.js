angular
.module('avocado')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', 'CurrentUserService', '$state', '$stateParams'];
function MainCtrl($rootScope, CurrentUserService, $state, $stateParams) {
  const vm = this;
  $rootScope.$on('loggedIn', () => {
    vm.user = CurrentUserService.currentUser;
    $state.go('userShow');
  });
  $rootScope.$on('loggedOut', () => {
    vm.user = null;
    $state.go('login');
  });
  vm.logout = () => {
    CurrentUserService.removeUser();
  };
}
