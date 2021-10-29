import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/interfaces/pokemon.interface';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  pokemon = this.pokemonsService.pokemon
  favouritesPokemon: Pokemon[] = this.pokemonsService.favouritesPokemon

  constructor(private pokemonsService: PokemonsService, private router: Router) { }

  ngOnInit(): void {
    if(this.pokemonsService.pokemon === undefined) {
      this.router.navigate(['/'])
    }
  }

  handleFavouritePokemon(pokemon: Pokemon) {
    this.pokemonsService.favouritesPokemon.push(pokemon)
    this.pokemonsService.favouritesPokemon.sort((a: any, b: any) => a.id - b.id)
    this.favouritesPokemon = this.pokemonsService.favouritesPokemon
    this.router.navigate(['/favourites'])
  }

}
