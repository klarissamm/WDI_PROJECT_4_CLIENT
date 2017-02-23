angular
  .module('avocado')
  .controller('PeriodsNewCtrl', PeriodsNewCtrl);

PeriodsNewCtrl.$inject = ['API', '$state', '$resource', 'Period', 'date', '$rootScope'];
function PeriodsNewCtrl(API, $state, $resource, Period, date, $rootScope) {
  const vm  = this;

  vm.period = vm.period || {
    date: date
  };

  vm.create = periodsCreate;

  function periodsCreate(){
    return Period
      .save({ period: vm.period })
      .$promise
      .then(() => {
        $rootScope.$broadcast('addedPeriod');
      });
  }
}
