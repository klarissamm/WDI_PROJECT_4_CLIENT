angular
.module('avocado')
.controller('PeriodsIndexCtrl', PeriodsIndexCtrl);

PeriodsIndexCtrl.$inject = ['Period'];
function PeriodsIndexCtrl(Period){
  const vm = this;
  vm.periods = Period.query();
}
