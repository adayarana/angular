import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokedex } from 'src/interfaces/pokedex.interface';
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

    getNextPage(url:any):Observable<Pokemons> {
      return this.http.get<Pokemons>(url)
    }

    getAllPokemons():Observable<Pokedex> {
      return this.http.get<Pokedex>(environment.ddbbPokedexUrl)
    }

    createPokemon(pokemon: Pokedex):Observable<Pokedex> {
      return this.http.post<Pokedex>(environment.ddbbPokedexUrl, pokemon)
    }

    getPokemonById(id: string):Observable<Pokedex> {
      return this.http.get<Pokedex>(`${environment.ddbbPokedexUrl}/${id}`)
    }

    updatePokemon(id: string, pokemon: Pokedex):Observable<any> {
      return this.http.put<Pokedex>(`${environment.ddbbPokedexUrl}/${id}`, pokemon)
    }

    deletePokemon(id: string):Observable<any> {
      return this.http.delete<Pokedex>(`${environment.ddbbPokedexUrl}/${id}`)
    }

    deleteAllPokemons():Observable<any> {
      return this.http.delete<Pokedex>(environment.ddbbPokedexUrl)
    }
}
