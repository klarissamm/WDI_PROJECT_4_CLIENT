angular
.module('avocado')
.controller('PeriodsIndexCtrl', PeriodsIndexCtrl);

PeriodsIndexCtrl.$inject = ['Period', 'calendarConfig', '$uibModal', '$document', '$scope', '$rootScope', '$uibModalStack'];
function PeriodsIndexCtrl(Period, calendarConfig, $uibModal, $document, $scope, $rootScope, $uibModalStack){
  const vm = this;

  $rootScope.$on('addedPeriod', () => {
    vm.fetchPeriods();
    $uibModalStack.dismissAll();
  });

  vm.fetchPeriods = () => {
    Period
    .query()
    .$promise
    .then(data => {
      vm.periods = data.map(period => {
        period.title = 'Show Infomation';
        period.startsAt = new Date(period.date).addDays(1);
        period.color = {
          primary: '#dc2a5e'
        };
        period.incrementsBadgeTotal = false;
        period.allDay = true;
        return period;
      });
    });
  };

  vm.fetchPeriods();

  vm.calendarView = 'month';
  vm.viewDate     = new Date();

  vm.open = function(period) {
    const modalInstance = $uibModal.open({
      animation: true,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      size: 'lg',
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

  vm.addPeriod = function(date) {
    const $modalInstance = $uibModal.open({
      animation: true,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      size: 'lg',
      appendTo: angular.element($document[0].querySelector('main')),
      controller: 'PeriodsNewCtrl',
      controllerAs: 'periodNew',
      templateUrl: '/js/views/periods/new.html',
      resolve: {
        date: date
      }
    });

    vm.close = function(){
      angular.element('#modal').modal('hide');
    };
  };


  Date.prototype.addDays = function(days) {
    this.setDate(this.getDate() + parseInt(days));
    return this;
  };
}
