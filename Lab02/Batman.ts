import { HeroBase } from "./HeroBase";

export class Batman extends HeroBase {
  private static instance: Batman;

  private constructor() {
    super({
      name: 'Bruce Wayne',
      city: 'Gotham City'
    });
  }
  public static getHero(): Batman {
    if (!Batman.instance) {
      this.instance = new Batman();
    }
    return Batman.instance;
  }
}