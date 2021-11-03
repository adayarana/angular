import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { Pokedex } from 'src/interfaces/pokedex.interface';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  pokedex = [] as any

  constructor(private pokemonsService: PokemonsService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllPokemons()
  }

  getAllPokemons() {
    const obs$ = this.pokemonsService.getAllPokemons().subscribe((data) => {
      this.pokedex = data
      obs$.unsubscribe()
    })
  }

  deletePokemon(id: string) {
    const obs$ = this.pokemonsService.deletePokemon(id).subscribe((data) => {
      this.toastr.error('Pokemon deleted successfully')
      this.getAllPokemons()
      obs$.unsubscribe()
    })
  }

  deleteAllPokemons() {
    const obs$ = this.pokemonsService.deleteAllPokemons().subscribe((data) => {
      this.toastr.success('Pokedex deleted successfully')
      this.getAllPokemons()
      obs$.unsubscribe()
    })
  }

}
