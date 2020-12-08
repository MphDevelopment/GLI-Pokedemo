import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';

import { FormsModule } from '@angular/forms';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe.pipe';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { PokedexService } from './pokedex.service';
import { PokedetailComponent } from './pokedetail/pokedetail.component';



@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    FilterPokemonPipePipe,
    PokedetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PokedexService],
  bootstrap: [AppComponent]
})
export class AppModule { }
