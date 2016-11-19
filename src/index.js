import 'jquery';
import angular from 'angular';

import 'angular-ui-router';
import 'angular-material';
import 'angular-resource';
import routesConfig from './routes';

import 'angular-material/angular-material.css';
import './index.scss';

// services
import {Heroes} from './app/services/Heroes.service';
// component
import {heroes} from './app/heroes/heroes';

export const app = 'app';

angular
  .module(app, [
    'ui.router',
    'ngResource',
    'ngMaterial'
  ])
  .config(routesConfig)
  .constant('api', 'http://hahow-recruit.herokuapp.com')
  .factory('Heroes', Heroes)
  .component('heroes', heroes)
  .component('hero', hero);
