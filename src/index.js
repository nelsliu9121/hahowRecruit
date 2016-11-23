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
import {Hero} from './app/services/Hero.service';

// component
import {heroes} from './app/heroes/heroes';
import {heroProfile} from './app/hero/heroProfile';
import {heroCard} from './app/hero/heroCard';

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
  .factory('Hero', Hero)
  .component('heroes', heroes)
  .component('heroProfile', heroProfile)
  .component('heroCard', heroCard);
