angular
  .module('avocado')
  .controller('PeriodsNewCtrl', PeriodsNewCtrl);

PeriodsNewCtrl.$inject = ['API', '$state', '$resource', 'Period', 'date'];
function PeriodsNewCtrl(API, $state, $resource, Period, date) {
  const vm  = this;

  vm.period = vm.period || {
    date: date
  };

  vm.create = periodsCreate;

  function periodsCreate(){
    console.log(vm.period);
    return Period
      .save({ period: vm.period })
      .$promise
      .then(() => {
        $state.go('periodsIndex');
      });
  }
}
