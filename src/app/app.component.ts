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
      5, 0.05, ["stiller", "movie-inspired"], 12
    ),
    new Keg (
      'Blue Sky', 'Store', 6, 0.00003, ['oil', 'vinegar'], 8
    ),
    new Keg ('Crocodile Dung', 'Egyptian Contraceptive', 4, 0.1, ['dont consume', 'ancient'], 60)
  ]
}
