import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HerosService } from '../services/heros.service';
@Component({
  selector: 'app-modif',
  templateUrl: './modif.component.html',
  styleUrls: ['./modif.component.css']
})
export class ModifComponent implements OnInit {
  hero:any = [];
  constructor(
    private Heros: HerosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.hero.getHerosById(id).subscribe(res => {
      this.hero = res;
    })
  }

  onModif() {
    this.hero.modifHeros(this.hero).subscribe(res => {
      this.router.navigate(['/heros']);
    })
  }

}
