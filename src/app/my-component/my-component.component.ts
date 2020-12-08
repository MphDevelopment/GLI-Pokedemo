import { Component, OnInit } from '@angular/core';
import { PokeDetails, Pokemon } from '../pokemon';
import {PokedexService} from '../pokedex.service'
import { PokeShareInfoService } from '../poke-share-info.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [PokedexService]
})
export class MyComponentComponent implements OnInit {

  constructor(private pokeService: PokedexService,
    private pokeShareInfo:PokeShareInfoService) {
   } 

  ngOnInit(): void {

    this.pokeService.getPokemons().subscribe((data)=>{
      console.log(data.results);
      const res = data.results as any[];
      res.forEach((element, index) => {
        this.pokemons.push(new Pokemon(element.name, index.toString()));
      });
    });
    
  }

  onClick():void{
    
    if (this.id != '')
    {
      
      this.pokeService.getPokemonInfo(this.id)
      .subscribe(data => {
        this.pokeDetails = data;
        this.pokeShareInfo.setValue(this.id);
      });
    }
  }

  id: string;

  n:string="name";

  query: string = '';

  pokemons: Array<Pokemon> = [];//= [new Pokemon("a", 0)];

  selected:Pokemon = null;

  pokeDetails:PokeDetails;

  

}
