export class heroProfileCtrl {
  constructor($state, $mdToast, Hero) {
    this.Hero = Hero;
    this.heroId = $state.params.heroId;
    this.$mdToast = $mdToast;
    this.remaining = 0;
    this.profile = Hero.profile({heroId: this.heroId});
  }

  increase(key) {
    if (this.remaining > 0) {
      this.profile[key]++;
      this.remaining--;
    }
  }

  decrease(key) {
    if (this.profile[key] > 0) {
      this.profile[key]--;
      this.remaining++;
    }
  }

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
