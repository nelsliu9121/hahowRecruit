export class heroProfileCtrl {
  /**
   * @ngdoc controller
   * @name app.controller:heroProfileCtrl
   *
   * @requires $state
   * @requires $mdToast
   * @requires Hero.service
   *
   * @description
   * Logic for hero profile component
   */
  constructor($state, $mdToast, Hero) {
    this.Hero = Hero;
    this.heroId = $state.params.heroId;
    this.$mdToast = $mdToast;
    this.remaining = 0;
    this.profile = Hero.profile({heroId: this.heroId});
  }

  /**
  * Increase attribute value by one
  * @param {string} key Attribute name
  */
  increase(key) {
    if (this.remaining > 0) {
      this.profile[key]++;
      this.remaining--;
    }
  }

  /**
  * Decrease attribute value by one
  * @param {string} key Attribute name
  */
  decrease(key) {
    if (this.profile[key] > 0) {
      this.profile[key]--;
      this.remaining++;
    }
  }

  /**
   * Save updated info to server
   */
  save() {
    if (this.remaining !== 0) {
      return false;
    }
    this.profile.$save({heroId: this.heroId}, () => {
      this.profile = this.Hero.profile({heroId: this.heroId});
      this.$mdToast.showSimple('Hero Profile Saved');
    });
  }
}
heroProfileCtrl.$inject = ['$state', '$mdToast', 'Hero'];
