import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { Observable } from 'rxjs';
import { PokeDetails } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private http: HttpClient ) { }

  private url:string = 'https://pokeapi.co/api/v2/pokemon/';

  getPokemons():Observable<any>{
    return this.http.get(this.url);
  }

  getPokemonInfo(id:string):Observable<PokeDetails>{
    return this.http.get<PokeDetails>(this.url + id);
  }
}
