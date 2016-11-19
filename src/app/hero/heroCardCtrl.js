export class heroCardCtrl {
  constructor($state) {
    this.$state = $state;
  }

  go() {
    this.$state.go("heroes.profile", {heroId: this.hero.id});
  }
}
