import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/services/pokemons.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  pokemon = this.pokemonsService.pokemon

  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
  }
}
