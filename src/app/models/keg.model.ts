export class Keg {
  constructor(public name: string, public brand: string, public pricePerPint: number, public alcoholContent: number, public flavors: string[], public pintsRemaining: number) {};

  sellPint(){
    this.pintsRemaining --;
  }

  sellGrowler(){
    this.pintsRemaining -= 2;
  }
}
