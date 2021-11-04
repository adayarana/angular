import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/interfaces/pokemon.interface';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent {
  favouritesPokemon: Pokemon[] = this.pokemonsService.favouritesPokemon

  constructor(private pokemonsService: PokemonsService, private router: Router) { }

  getMoreInfo(pokemon: Pokemon) {
    this.pokemonsService.pokemon = pokemon
    this.router.navigate(['/pokemon'])
  } 

  deletePokemon(favouritePokemon: Pokemon) {
    this.pokemonsService.favouritesPokemon = this.pokemonsService.favouritesPokemon.filter((pokemon: any) => pokemon.id !== favouritePokemon.id)
    this.favouritesPokemon = this.pokemonsService.favouritesPokemon
  }

}
