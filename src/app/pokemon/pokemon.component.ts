import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  pokemon: Pokemon = {
    id: 3,
    name: 'Charizard',
    type: 'some type for later',
    image: 'some photo url for later',
    liked: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
