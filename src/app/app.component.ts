import { Component } from '@angular/core';
import { Keg } from './models/keg.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Kombucha Tap"
  kegs: Keg[] = [
    new Keg (
      'Blue Steel',
      'Zoolander',
      5, 0.05, ["Stiller", "Movie-inspired"], 12
    ),
    new Keg (
      'Blue Sky', 'Store', 6, 0.003, ['Oil', 'Vinegar'], 8
    ),
    new Keg ('Crocodile Dung', 'Egyptian Contraceptive', 4, 0.1, ["Don't consume", 'Ancient'], 60)
  ]
  selectedKeg = null;

  finishedEditing() {
  this.selectedKeg = null;
  }

  editKeg(currentKeg){
    this.selectedKeg = currentKeg;
  }

  flavorName = '';

  addFlavor(currentKeg){
    currentKeg.flavors.push(this.flavorName);
    this.flavorName = ''
  }

  removeFlavor(currentKeg, flavor) {
    let index = currentKeg.flavors.indexOf(flavor);
    return currentKeg.flavors.splice(index, 1)
  }

  costColor(currentKeg) {
    if (currentKeg.pricePerPint > 5) {
      return 'blue';
    } else if (currentKeg.pricePerPint === 5) {
      return "red";
    } else {
      return "green";
    }
  }

  sortedByAndOrder = 'null'

  sort(property) {
    if (this.sortedByAndOrder.includes(property + 'Descending')) {
      this.kegs.sort( (a, b) => {
        if (a[property].toLowerCase() > b[property].toLowerCase()) {
          return 1
        } else {
          return -1
        }
    })
      this.sortedByAndOrder = property + 'Ascending'
    } else {
      this.kegs.sort( (a, b) => {
        if (a[property].toLowerCase() > b[property].toLowerCase()) {
          return -1
        } else {
          return 1
        }
    })
      this.sortedByAndOrder = property + 'Descending'
    }
  }

  numberSortType = 'null'

  sortNumber(property) {

    if (this.numberSortType.includes(property + 'Descending')) {
      this.kegs.sort( (a, b) => {
        return a[property] - b[property]
    })
      this.numberSortType = property + 'Ascending'
    } else {
      this.kegs.sort( (a, b) => {
        return b[property] - a[property]
    })
      this.numberSortType = property + 'Descending'
    }
  }

  happyHourDiscount(){
    this.kegs.forEach(function(keg){
      keg.discount(20);
      console.log(keg.pricePerPint);
    })
  }

  calculatePintsAsPercent(keg) {
    let percentNumber = keg.pintsRemaining / 1.24
    return percentNumber.toString()
  }

  // percentOfKegRemaining: string = toString(this.pintsRemaining / 1.24);

}
