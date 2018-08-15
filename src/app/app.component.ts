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
}
