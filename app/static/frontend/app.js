
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uibModal from 'angular-ui-bootstrap/src/modal';

import MainService from './services/main-service.js';

import MainCtrl from './areas/main-ctrl.js';
import LoadingCtrl from './areas/loading-ctrl.js'


import appConfig from './config.js';

//css
import './styles/sassy.scss'

angular.module('financeApp', [uiRouter, uibModal])
  .config(appConfig)
  .controller('MainCtrl', MainCtrl)
  .controller('LoadingCtrl', LoadingCtrl)
  .factory('MainService', MainService)
  angular.bootstrap(document, ['financeApp']);
