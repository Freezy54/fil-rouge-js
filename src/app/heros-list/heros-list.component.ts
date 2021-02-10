import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HerosService } from '../services/heros.service';

@Component({
  selector: 'app-root',
  templateUrl: './heros-list.component.html',
  styleUrls: ['./heros-list.component.css']
})
export class HerosListComponent implements OnInit, OnDestroy  {
  title = 'fil-rouge';
  
  hero:any = [];

  heroSubscription: Subscription;
  
  constructor(
    private heros: HerosService) {}


    ngOnInit(){
      this.heroSubscription =  this.heros.heroSubject.subscribe((value) =>  {
        this.hero = value;
      });
      this.heros.emitHeroSubject();
    }

    ngOnDestroy() {
      this.heroSubscription.unsubscribe();
    }


};