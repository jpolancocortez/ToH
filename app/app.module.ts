import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }  from './app.component';

import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

import { HeroService } from './hero.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    NgbModule.forRoot() 
  ],
  declarations: [ 
    AppComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  providers: [ 
    HeroService 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
