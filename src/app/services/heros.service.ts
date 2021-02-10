import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { emitWarning } from 'process';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HerosService {



  constructor(
    private http: HttpClient
  ) {
    this.getHero();
  }

  heroSubject = new Subject<any[]>();

  private hero = [];

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  emitHeroSubject() {
    this.heroSubject.next(this.hero.slice());
  }

  getHerosById(id: number) {
return this.http.get<any>('api/Heros/' + id);
  }

  addHero(Heros: any) {
    this.http.post<any>('/api/Heros', Heros, this.httpOptions).subscribe(res => {
      this.hero.push(res);
      this.emitHeroSubject();
    })
  }

    getHero() {
      this.http.get<any>('/api/Heros').subscribe(res => {
        this.hero = res;
        this.emitHeroSubject();
      })
    }

    modifHeros(Heros: any) {
      var index = this.hero.findIndex(
        (heroToModif)=> {
          if (heroToModif._id == Heros._id) {
            return true;
          }
        }
      )
      this.hero.splice(index, 1, this.hero);
      this.emitHeroSubject();
      return this.http.put<any>('/api/Heros' + Heros._id, Heros, this.httpOptions);
    }

    deleteHero(id:any) {
      this.http.delete<any>('/api/heros/' + id).subscribe(res => {
        var index = this.hero.findIndex(
          (heroToDelete) => {
            if(heroToDelete._id == id) {
              return true;
            }
          }
        );
        this.hero.splice(index, 1);
        this.emitHeroSubject();
      })
    }


}
