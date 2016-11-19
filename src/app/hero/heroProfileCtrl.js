export class heroProfileCtrl {
  constructor($state, Hero) {
    this.heroId = $state.params.heroId;
    Hero.profile({heroId: this.heroId}, data => {
      this.profile = data;
    });
  }
}
