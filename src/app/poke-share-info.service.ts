import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PokedexService } from './pokedex.service';

@Injectable({
  providedIn: 'root'
})
export class PokeShareInfoService {

  value:string;

  public stringVar = new Subject<string>();
  constructor() { }

  setValue(val:string){
    this.stringVar.next(val);
  }

  getValue():string{
    return this.value;
  }

  getObservable() : Subject<string>{
    return this.stringVar;
  }
}
