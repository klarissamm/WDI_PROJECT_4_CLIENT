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

  vm.animationsEnabled = true;

  vm.open = function(data, size) {

    var modalInstance = $uibModal.open({
      animation: vm.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: '/js/views/periods/modal.html',
      size: size,
      appendTo: angular.element($document[0].querySelector('main')),
      resolve: {
        data: function () {
          return data;
        }
      }
    });

    vm.ok = function () {
      vm.close({$value: vm.selected.item});
    };

    vm.cancel = function () {
      vm.dismiss({$value: 'cancel'});
    };
  };
}
