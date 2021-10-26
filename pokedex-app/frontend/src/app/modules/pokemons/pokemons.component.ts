import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/interfaces/pokemon.interface';
import { PokemonsService } from 'src/services/pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {
  pokemons: Pokemon[] = this.pokemonsService.pokemons
  filteredPokemons: Pokemon[] = this.pokemonsService.filteredPokemons
  pokedex: Pokemon[] = this.pokemonsService.pokedex
  nextUrl: string[] = []
  previousUrl: string[] = []

  constructor(private pokemonsService: PokemonsService, private router: Router) { }

  ngOnInit(): void {

    if(this.pokemonsService.pokemons.length > 0) {
      this.pokemonsService.pokemons = []
    }

    const obs$ = this.pokemonsService.getPokemons()
      .subscribe((res: any) => {
        this.nextUrl = res.next
        this.previousUrl = res.previous
        res.results.forEach((result: { name: any; }) => {
          this.pokemonsService.getMoreData(result.name)
            .subscribe((res:any) => {
              this.pokemonsService.pokemons.push(res)
              this.pokemonsService.pokemons.sort((a: any, b: any) => a.id - b.id)
              console.log(`Esto es pokemons -> filteredPokemons: ${this.pokemonsService.filteredPokemons}`)
          
            })
        })
        obs$.unsubscribe();
        console.log(this.pokemons)
      })

  
    }

    nextPage() {
      this.pokemonsService.pokemons = []
      const obs$ = this.pokemonsService.getNextPage(this.nextUrl)
        .subscribe((res: any) => {
          this.nextUrl = res.next
          this.previousUrl = res.previous
          res.results.forEach((result: { name: any; }) => {
            this.pokemonsService.getMoreData(result.name)
              .subscribe((res:any) => {
                this.pokemonsService.pokemons.push(res)
                this.pokemonsService.pokemons.sort((a: any, b: any) => a.id - b.id)
                this.pokemons = this.pokemonsService.pokemons
             })
          })
          obs$.unsubscribe();
        })
    }

    previousPage() {
      if(this.previousUrl !== null) {
        this.pokemonsService.pokemons = []
        const obs$ = this.pokemonsService.getNextPage(this.previousUrl)
          .subscribe((res: any) => {
            this.previousUrl = res.previous
            this.previousUrl = res.previous
            res.results.forEach((result: { name: any; }) => {
              this.pokemonsService.getMoreData(result.name)
                .subscribe((res:any) => {
                  this.pokemonsService.pokemons.push(res)
                  this.pokemonsService.pokemons.sort((a: any, b: any) => a.id - b.id)
                  this.pokemons = this.pokemonsService.pokemons
               })
            })
            obs$.unsubscribe();
          })
      }
     
    }

    handleFavouritePokemon(pokemon: Pokemon) {
      console.log(pokemon)
    }

    getMoreInfo(pokemon: Pokemon) {
      console.log(pokemon)
      this.pokemonsService.pokemon = pokemon
      this.router.navigate(['/pokemon'])
    } 
}
  