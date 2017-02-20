angular
.module('angularAuthentication')
.controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['User'];
function LoginCtrl(User) {
  const vm = this;

  vm.login = () => {
    User.login(vm.user.user)
    .$promise
    .then(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });
  };
}
