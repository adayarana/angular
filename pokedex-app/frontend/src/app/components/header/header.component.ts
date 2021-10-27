import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchText = ''

  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
  }

  searchPokemon(newSearch: string) {
     this.pokemonsService.filteredPokemons = this.pokemonsService.pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
     pokemon.types[0].type.name.toLowerCase().includes(this.searchText.toLowerCase())
     )
  }
}
