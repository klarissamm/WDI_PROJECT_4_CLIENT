angular
  .module('avocado')
  .controller('PeriodsNewCtrl', PeriodsNewCtrl);

PeriodsNewCtrl.$inject = ['API', '$state', '$resource', 'Period'];
function PeriodsNewCtrl(API, $state, $resource, Period) {
  const vm  = this;

  vm.create = periodsCreate;

  function periodsCreate(){
    return Period
      .save({ period: vm.period })
      .$promise
      .then(() => {
        $state.go('periodsIndex');
      });
  }
}
