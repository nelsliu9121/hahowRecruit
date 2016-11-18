import 'jquery';
import angular from 'angular';

import 'angular-ui-router';
import 'angular-material';
import 'angular-resource';
import routesConfig from './routes';

import './index.scss';

import {Heroes} from './app/Heroes.service';
import {heroes} from './app/heroes';
import {hero} from './app/hero';

export const app = 'app';

angular
  .module(app, [
    'ui.router',
    'ngResource',
    'ngMaterial'
  ])
  .config(routesConfig)
  .factory('Heroes', Heroes)
  .component('heroes', heroes)
  .component('hero', hero);
