angular
.module('angularAuthentication')
.controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['User', 'TokenService'];
function LoginCtrl(User, TokenService) {
  const vm = this;

  vm.login = () => {
    User.login(vm.user.user)
    .$promise
    .then(data => {
      console.log(data);
      TokenService.setToken(data.token);
    });
  };
}
