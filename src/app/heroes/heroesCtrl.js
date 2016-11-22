export class heroesCtrl {
  /**
   * @ngdoc controller
   * @name app.controller:heroesCtrl
   *
   * @requires $state
   * @requires Heroes.service
   *
   * @description
   * Controller for heroes component
   */
  constructor($state, Heroes) {
    this.heroes = Heroes.get({});
  }
}
heroesCtrl.$inject = ['$state', 'Heroes'];
