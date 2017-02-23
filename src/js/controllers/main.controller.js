angular
.module('avocado')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', 'CurrentUserService', '$state', '$scope'];
function MainCtrl($rootScope, CurrentUserService, $state, $scope) {
  const vm = this;
  $rootScope.$on('loggedIn', () => {
    vm.user = CurrentUserService.currentUser;
    $state.go('userShow', {id: vm.user.id});
  });
  $rootScope.$on('loggedOut', () => {
    vm.user = null;
    $state.go('home');
  });
  vm.logout = () => {
    CurrentUserService.removeUser();
  };

  navigator.geolocation.getCurrentPosition((position) =>{
    vm.user_position = {};
    vm.user_position.lat = position.coords.latitude;
    vm.user_position.lng = position.coords.longitude;
    console.log('success', vm.user_position);
    $scope.$apply();
  });
}
