angular
.module('avocado')
.controller('PeriodsIndexCtrl', PeriodsIndexCtrl);

PeriodsIndexCtrl.$inject = ['Period', 'uiCalendarConfig'];
function PeriodsIndexCtrl(Period, uiCalendarConfig){
  const vm = this;
  vm.periods = Period.query();
  vm.eventSources = [];

  vm.calendarDate = [
    {
      events: [
        {
          title: 'From',
          start: '2015-01-31',
          allDay: true,
          rendering: 'background',
          backgroundColor: '#f26522'
        }
      ]
    }
  ];

  vm.uiConfig = {
    calendar: {
      editable: false,
      aspectRatio: 2,
      header: {
        left: 'title',
        center: '',
        right: 'today prev,next'
      },
      // dayClick: vm.setCalDate,
      background: '#f26522'
    }
  };

  // vm.setCalDate = function(date, jsEvent, view) {
  //   var selectedDate = moment(date).format('YYYY-MM-DD');				    // set dateFrom based on user click on calendar
  //   vm.calendarDate[0].events[0].start = selectedDate;				    // update Calendar event dateFrom
  //   vm.selectedDate = $filter('date')(selectedDate, 'yyyy-MM-dd');;		// update vm.dateFrom
  //   console.log('vm.uiConfig', vm.uiConfig);
  //   console.log('uiCalendarConfig', uiCalendarConfig);
  // };


  vm.calendarTab = 1;

  vm.selectCalTab = function(tab){		// function to set which calendar tab is shown in html via ng-if
    if(tab === 1){
      vm.calendarTab = 1;
    } else {
      vm.calendarTab = 2;
    }
  };
}
