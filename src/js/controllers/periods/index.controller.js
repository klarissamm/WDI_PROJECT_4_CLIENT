angular
.module('avocado')
.controller('PeriodsIndexCtrl', PeriodsIndexCtrl);

PeriodsIndexCtrl.$inject = ['Period', 'calendarConfig', '$uibModal', '$document', '$scope'];
function PeriodsIndexCtrl(Period, calendarConfig, $uibModal, $document, $scope){
  const vm = this;
  Period
  .query()
  .$promise
  .then(data => {
    vm.periods = data.map(period => {
      period.title = 'Show Infomation';
      period.startsAt = new Date(period.date);
      period.color = {
        primary: '#333',
        secondary: '#e00'
      };
      period.incrementsBadgeTotal = false;
      period.allDay = true;
      return period;
    });
  });

  vm.calendarView = 'month';
  vm.viewDate     = new Date();

  vm.open = function(period, size) {
    var modalInstance = $uibModal.open({
      animation: true,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      size: size,
      appendTo: angular.element($document[0].querySelector('main')),
      controller: 'PeriodsShowCtrl',
      controllerAs: 'periodShow',
      templateUrl: '/js/views/periods/show.html',
      resolve: {
        period: period
      }
    });

    vm.close = function(){
      angular.element('#modal').modal('hide');
    };

  };
}
