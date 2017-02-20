angular
.module('avocado')
.controller('UserShowCtrl', UserShowCtrl);

UserShowCtrl.$inject = ['User', '$stateParams', '$state', 'CurrentUserService'];
function UserShowCtrl(User, $stateParams, $state, CurrentUserService){
  const vm = this;

  function getUser(){
    User
    .get($stateParams)
    .$promise
    .then(response => {
      vm.user = response;
      vm.user.lastPeriod = vm.user.periods.sort((a,b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      })[0].date;
    });
  }

  getUser();


  vm.delete = function(){
    User
    .delete($stateParams)
    .$promise
    .then(() => {
      CurrentUserService.removeUser();
      $state.go('/');
    });
  };

  // If the person logged in has the same id as the user profile they can edit/delete said profile, otherwise they can not.
  vm.isCurrentUser = function(){
    return CurrentUserService.currentUser.id === $stateParams.id;
  };
}
