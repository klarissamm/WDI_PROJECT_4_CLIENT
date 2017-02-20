angular
.module('avocado')
.controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User', 'CurrentUserService'];
function RegisterCtrl(User, CurrentUserService){
  const vm = this;

  vm.register = () => {
    User
    .register(vm.user.user).$promise
    .then(() => {
      CurrentUserService.getUser();
    }, err => {
      console.log(err);
    });
  };
}
