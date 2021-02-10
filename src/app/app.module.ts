import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import {FormsModule} from '@angular/forms';
import {HerosService} from './services/heros.service';
import { HerosNewComponent } from './heros-new/heros-new.component';
import { HerosListComponent } from './heros-list/heros-list.component';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ModifComponent } from './modif/modif.component';

const appRoutes: Routes= [
  
  {
    path:'liste',
    component: HerosListComponent
  },
  {
    path:'new',
    component: HerosNewComponent
  },
  {
    path: 'modif/:id',
    component: ModifComponent
  },


]


@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    HerosNewComponent,
    HerosListComponent,
    ModifComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HerosService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
