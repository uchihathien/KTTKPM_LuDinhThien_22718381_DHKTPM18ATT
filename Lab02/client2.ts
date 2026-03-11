import { Batman } from "./Batman";
import { Spiderman } from "./Spiderman";

export class Client2 {
  private batman: Batman;
  private spiderman: Spiderman;
  constructor() {
    console.log('Client2...');
    console.log('Calling to Heroes...');
    this.batman = Batman.getHero();
    this.spiderman = Spiderman.getHero();
  }
  showHero(hero: string): string {
    return this[hero].toString();
  }
}