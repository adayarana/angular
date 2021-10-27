import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/interfaces/pokemon.interface';
import { Pokemons } from 'src/interfaces/pokemons.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  pokemons: Pokemon[] = []
  favouritesPokemon: Pokemon[] = []
  pokemon: any
  filteredPokemons: Pokemon[] = []
  pokedex: Pokemon[] = this.filteredPokemons.length > 0 ? this.filteredPokemons : this.pokemons

  constructor(private http: HttpClient) { }

    getPokemons():Observable<Pokemons> {
      return this.http.get<Pokemons>(environment.pokemonsApiURL);
    }

    getMoreData(pokemon:any):Observable<Pokemon> {
      return this.http.get<Pokemon>(`${environment.pokemonApiURL}${pokemon}`)
    }

    getNextPage(url:any) {
      return this.http.get(url)
    }
}
