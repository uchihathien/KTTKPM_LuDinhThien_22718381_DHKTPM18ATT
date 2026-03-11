import { Batman } from "./Batman";
import { Spiderman } from "./Spiderman";

export class Client1 {
  private batman: Batman;
  private spiderman: Spiderman;
  constructor() {
    console.log('Client1...');
    console.log('Calling to Heroes...');
    this.batman = Batman.getHero();
    this.spiderman = Spiderman.getHero();
  }
  showHero(hero: string): string {
    return this[hero].toString();
  }
}
