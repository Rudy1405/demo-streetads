import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bus-card',
  templateUrl: './bus-card.component.html',
  styleUrls: ['./bus-card.component.css']
})
export class BusCardComponent implements OnInit {

  rutasNumbers = ['05', '23', '12', 'Azteca', '55', 'Nueva vision'];
  rutaNumber = '0';
  minutes = 1;
  makeFade = false;

  constructor() {

    setInterval( () => {
                  if (this.makeFade) {
                    this.makeFade = false;
                  } else {
                    this.makeFade = true;
                    this.changeValues();
                  }
                 }, 5000);

   }

  ngOnInit() {
    this.changeValues();
  }

  changeValues() {
    this.rutaNumber = this.rutasNumbers[this.generateRandom(0, 6) ];
    this.minutes = this.generateRandom(3, 18);
  }

  generateRandom(min, max) {
    return Math.floor(Math.random() * (+max - +min)) + +min;
  }

}
