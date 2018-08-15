export class Keg {
  constructor(public name: string, public brand: string, public pricePerPint: number, public alcoholContent: number, public flavors: string[], public pintsRemaining: number) {};

  sellPint(){
    this.pintsRemaining --;
  }

  sellSmallGrowler(){
    this.pintsRemaining -= 2;
  }

  sellLargeGrowler(){
    this.pintsRemaining -= 4;
  }
}
