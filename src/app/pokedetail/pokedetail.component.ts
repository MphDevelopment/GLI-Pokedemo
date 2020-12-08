import { Component, Input, OnInit } from '@angular/core';
import { PokeShareInfoService } from '../poke-share-info.service';
import { PokeDetails } from '../pokemon';

@Component({
  selector: 'app-pokedetail',
  templateUrl: './pokedetail.component.html',
  styleUrls: ['./pokedetail.component.css'],
})
export class PokedetailComponent implements OnInit {

  @Input('details')
  details:PokeDetails;
  constructor(private pokeShareInfo:PokeShareInfoService) {
    this.pokeShareInfo.getObservable().subscribe(e=>
      console.log('EEEE' + e));
   }

  ngOnInit(): void {
    console.log(this.pokeShareInfo.getValue());
  }

}
