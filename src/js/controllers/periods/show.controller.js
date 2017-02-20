angular
.module('avocado')
.controller('PeriodsShowCtrl', PeriodsShowCtrl);

PeriodsShowCtrl.$inject = ['Period', '$stateParams', '$state'];
function PeriodsShowCtrl(Period, $stateParams, $state){
  const vm = this;

  function getPeriods(){
    Period
    .get($stateParams)
    .$promise
    .then(response => {
      vm.period = response;
      console.log(response);
    });
  }

  getPeriods();


  vm.delete = function(){
    Period
    .delete($stateParams)
    .$promise;
    $state.go('/');
  };
}
