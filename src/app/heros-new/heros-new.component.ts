import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HerosService } from '../services/heros.service';

@Component({
  selector: 'app-heros-new',
  templateUrl: './heros-new.component.html',
  styleUrls: ['./heros-new.component.css']
})
export class HerosNewComponent implements OnInit {

  newHero: any;

  constructor(
    private Hero: HerosService,
    private router: Router
  ) { }

  ngOnInit() {
    this.newHero = {
      heroName: null,
      heroVie: null
    };
  }

  onSaveHeros() {
    this.Hero.addHero(this.newHero)
    this.router.navigate(['/herosListe']);
  }
  
}
