import { Component, Input, OnInit } from '@angular/core';

import { HerosService } from '../services/heros.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent {

 @Input() heroName: string;
 @Input() heroVie: string;
 @Input() id: number;


  constructor(
    private Hero: HerosService
  ) { }

  getEnVie() {
    return this.heroVie;
  }




  changementEtat() {
    if (this.heroVie == "Mort") {
      this.heroVie = "En vie";

    } else {
      this.heroVie = "Mort";
    }
  }

  removeHero(id: any) {
    this.Hero.deleteHero(id);
  }

  

}
