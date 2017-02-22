angular
.module('avocado')
.controller('PeriodsShowCtrl', PeriodsShowCtrl);

PeriodsShowCtrl.$inject = ['Period', '$stateParams', '$state', 'period'];
function PeriodsShowCtrl(Period, $stateParams, $state, period){
  const vm = this;

  vm.period = period;

  vm.painInWords = {
    '1': 'Achey Feeling',
    '2': 'Cramps',
    '3': 'Cramps and Headache',
    '4': 'Cramps, Headache and Nausea',
    '5': 'Kill Me Now'
  };

  vm.bleedingInWords = {
    '1': 'Light',
    '2': 'Medium',
    '3': 'Heavy'
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
