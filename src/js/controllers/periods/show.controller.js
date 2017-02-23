angular
.module('avocado')
.controller('PeriodsShowCtrl', PeriodsShowCtrl);

PeriodsShowCtrl.$inject = ['Period', '$stateParams', '$state', 'period'];
function PeriodsShowCtrl(Period, $stateParams, $state, period){
  const vm = this;

  vm.period = period;

  vm.painInWords = {
    '1': 'achey pain',
    '2': 'cramps',
    '3': 'cramps and headache',
    '4': 'cramps, headache and nausea',
    '5': 'that kill me now feeling'
  };

  vm.bleedingInWords = {
    '1': 'light',
    '2': 'medium',
    '3': 'heavy'
  };

  vm.delete = function(){
    Period
    .delete($stateParams)
    .$promise
    .then(() => {
      $state.go('/');
    });
  };
}
