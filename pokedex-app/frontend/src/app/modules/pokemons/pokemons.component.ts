import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/interfaces/pokemon.interface';
import PokemonsService from 'src/services/pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {
  pokemons: Pokemon[] = []
  nextUrl: string[] = []
  previousUrl: string[] = []

  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit(): void {

    const obs$ = this.pokemonsService.getPokemons()
      .subscribe((res: any) => {
        this.nextUrl = res.next
        this.previousUrl = res.previous
        res.results.forEach((result: { name: any; }) => {
          this.pokemonsService.getMoreData(result.name)
            .subscribe((res:any) => {
              this.pokemons.push(res)
           })
        })
        obs$.unsubscribe();
        console.log(this.pokemons)
      })
  
    }

    nextPage() {
      this.pokemons = []
      const obs$ = this.pokemonsService.getNextPage(this.nextUrl)
        .subscribe((res: any) => {
          this.nextUrl = res.next
          this.previousUrl = res.previous
          res.results.forEach((result: { name: any; }) => {
            this.pokemonsService.getMoreData(result.name)
              .subscribe((res:any) => {
                this.pokemons.push(res)
             })
          })
          obs$.unsubscribe();
        })
    }

    previousPage() {
      if(this.previousUrl !== null) {
        this.pokemons = []
        const obs$ = this.pokemonsService.getNextPage(this.previousUrl)
          .subscribe((res: any) => {
            this.previousUrl = res.previous
            this.previousUrl = res.previous
            res.results.forEach((result: { name: any; }) => {
              this.pokemonsService.getMoreData(result.name)
                .subscribe((res:any) => {
                  this.pokemons.push(res)
               })
            })
            obs$.unsubscribe();
          })
      }
     
    }
}
  