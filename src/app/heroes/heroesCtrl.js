export class heroesCtrl {
  constructor($state, Heroes) {
    Heroes.get({}, data => {
      this.heroes = data;
    });
  }
}
