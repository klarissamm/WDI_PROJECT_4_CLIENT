angular
.module('avocado')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', 'CurrentUserService', '$state'];
function MainCtrl($rootScope, CurrentUserService, $state) {
  const vm = this;
  $rootScope.$on('loggedIn', () => {
    vm.user = CurrentUserService.currentUser;
    $state.go('userShow', {id: vm.user.id});
  });
  $rootScope.$on('loggedOut', () => {
    vm.user = null;
    $state.go('login');
  });
  vm.logout = () => {
    CurrentUserService.removeUser();
  };
}
