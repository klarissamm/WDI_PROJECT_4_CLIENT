angular
.module('avocado')
.directive('addEvent', AddEvent);

AddEvent.$inject = ['$timeout'];
function AddEvent($timeout) {
  return {
    restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
    link: function(scope, element) {
      $timeout(function() {
        const days = element[0].querySelectorAll('.cal-month-day');
        angular.forEach(days, dayElement => {
          dayElement.addEventListener('click', addEvent);
        });

        function addEvent(e) {
          e.preventDefault();
          const day = this.querySelector('span[data-cal-date]').textContent;
          const month = document.querySelector('.periodInfo h3').textContent;
          console.log(`${day} ${month}`)
          const date = new Date(`${day} ${month}`);
          console.log(date);
          scope.periodsIndex.addPeriod(date);
        }
      }, 100);
    }
  };
}
