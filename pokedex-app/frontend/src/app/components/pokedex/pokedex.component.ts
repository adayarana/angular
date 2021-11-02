import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { Pokedex } from 'src/interfaces/pokedex.interface';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  pokedex = [] as any

  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    this.getAllPokemons()
  }

  getAllPokemons() {
    const obs$ = this.pokemonsService.getAllPokemons().subscribe((data) => {
      this.pokedex = data
      obs$.unsubscribe()
    })
  }

}
