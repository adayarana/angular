import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Pokemon } from 'src/interfaces/pokemon.interface';
import { Pokemons } from 'src/interfaces/pokemons.interface';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  pokemons: Pokemon[] = []
  pokemon: any
  filteredPokemons: Pokemon[] = []
  // pokedex: Pokemon[] = this.filteredPokemons.length > 0 ? this.filteredPokemons : this.pokemons

  constructor(private http: HttpClient) { }
  
  pokemonSubject = new Subject<Pokemon[]>();

  get pokemonAction$():Observable<Pokemon[]> {
    return this.pokemonSubject.asObservable();
  }

  searchPokemon(searchText: string): void {
    
    
    const filteredPokemons = this.pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(searchText.toLowerCase()))
    
    this.pokemonSubject.next(filteredPokemons)
    // this.pokemonsService.filteredPokemons = this.pokemonsService.pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
    // pokemon.types[0].type.name.toLowerCase().includes(this.searchText.toLowerCase())
    // )
    
  }

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
