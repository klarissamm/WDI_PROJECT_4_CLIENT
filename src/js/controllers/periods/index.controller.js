angular
.module('avocado')
.controller('PeriodsIndexCtrl', PeriodsIndexCtrl);

PeriodsIndexCtrl.$inject = ['Period'];
function PeriodsIndexCtrl(Period){
  const vm = this;
  Period
    .query()
    .$promise
    .then(data => {
      vm.periods = data.map(period => {
        period.startsAt = new Date(period.date);
        return period;
      });
    });
  vm.calendarView = 'month';
  vm.viewDate     = new Date();

  vm.eventClicked = function(data) {
    console.log(data);
  };
}
