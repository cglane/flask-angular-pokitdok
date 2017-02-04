/**
 * @ngdoc controller
 * @name gdgSettingsApp.controller:MainCtrl
 * @description
 * List view of the user's clients
 */
LoadingCtrl.$inject = ['$http', '$timeout','$scope','$state', 'MainService','$rootScope'];
export default function LoadingCtrl($http, $timeout,$scope,$state, MainService,$rootScope) {
  var vm = this;
  vm.image = 'static/assets'+require('../images/loading.gif')
}
