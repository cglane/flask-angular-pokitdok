/**
 * @ngdoc controller
 * @name gdgSettingsApp.controller:MainCtrl
 * @description
 * List view of the user's clients
 */
MainCtrl.$inject = ['$http', '$timeout','$scope','$state', 'MainService','$rootScope'];
export default function MainCtrl($http, $timeout,$scope,$state, MainService,$rootScope) {
  var vm = this;
  vm.getPartners = getPartners;
  vm.getGraph = getGraph;
  vm.myJson = [];
  vm.gotMyJson = false;
  vm.graph = '';
  vm.loading = false;
  vm.loadingSrc = 'static/assets'+require('../images/loading.gif')

  function getPartners(){
    MainService.getJson().then(x=>{
      vm.gotMyJson = true;
      vm.myJson = x.data
    })
  }
  function getGraph(){
    vm.loading = true;
    var fileName = 'file'+new Date().getTime()+'.png'
    MainService.getGraph(vm.myJson, fileName).then(x=>{
      vm.loading = false;
      vm.graph = x.data.result
    })
  }

}
