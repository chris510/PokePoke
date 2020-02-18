import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PokedexListComponent } from './pokedex-list/pokedex-list.component';
import { PokemonItemComponent } from './pokemon-item/pokemon-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PokedexListComponent,
    PokemonItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
