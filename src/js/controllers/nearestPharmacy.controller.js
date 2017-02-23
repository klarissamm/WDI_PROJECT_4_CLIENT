angular
.module('avocado')
.controller('NearestPharmacyCtrl', NearestPharmacyCtrl);

NearestPharmacyCtrl.$inject = ['API', '$scope', '$http', 'NgMap'];
function NearestPharmacyCtrl(API, $scope, $http, NgMap){
  const vm = this;
  vm.pharmacy = null;
  console.log($scope.$parent.main.user_position);
  if ($scope && $scope.$parent && $scope.$parent.main && $scope.$parent.main.user_position){
    $http
    .post(`${API}/pharmacy`, {position: $scope.$parent.main.user_position})
    .then(response => {
      console.log(response);
      vm.pharmacy = response.data.result;
      NgMap.getMap().then(function(map) {
        console.log(map.getCenter());
      });
    });

  }
}
