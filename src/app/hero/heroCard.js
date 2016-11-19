import {heroCardCtrl} from './heroCardCtrl';

export const heroCard = {
  templateUrl: 'app/hero/heroCard.html',
  controller: heroCardCtrl,
  controllerAs: 'hcCtrl',
  bindings: {
    hero: '='
  }
};
