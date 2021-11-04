import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PokemonsService } from 'src/app/services/pokemons.service';

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
      this.getAllPokemons()
      obs$.unsubscribe()
    })
    this.error('Pokemon deleted successfully')
  }

  deleteAllPokemons() {
    const obs$ = this.pokemonsService.deleteAllPokemons().subscribe((data) => {
      this.getAllPokemons()
      obs$.unsubscribe()
    })
    this.warning('Pokedex deleted successfully')
  }

  warning(message: string):void {
    this.toastr.warning(message, 'Pokedex', {
      timeOut: 3000,
      extendedTimeOut: 1000
    })
  }

  error(message: string):void {
    this.toastr.error(message, 'Pokedex', {
      timeOut: 3000,
      extendedTimeOut: 1000
    })
  }

}
