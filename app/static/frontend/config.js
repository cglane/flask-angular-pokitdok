function config($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('main', {
      // url: '#/main',
      url:'/',
      template: require('./areas/main-tpl.html'),
      controller: 'MainCtrl as vm',
    })
    // .state('loading',{
    //   url:'/',
    //   template: require('./areas/loading-tpl.html'),
    //   controller: "LoadingCtrl as vm",
    //   resolve:{
    //     deps:['$rootScope','MainService',"$state",function($rootScope,MainService,$state){
    //       setTimeout(function () {
    //         $state.go('main')
    //       }, 3000);
    //     }]
    //   }
    // })

}

export default ['$stateProvider', '$urlRouterProvider', '$locationProvider', config];
