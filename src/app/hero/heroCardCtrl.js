export class heroCardCtrl {
  /**
   * @ngdoc controller
   * @name app.controller:controller
   *
   * @requires $state
   *
   * @description
   * Controller for hero card component
   */
  constructor($state) {
    this.$state = $state;
  }
}
heroCardCtrl.$inject = ['$state'];
