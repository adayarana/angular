import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { Pokedex } from 'src/interfaces/pokedex.interface';

@Component({
  selector: 'app-create-pokedex',
  templateUrl: './create-pokedex.component.html',
  styleUrls: ['./create-pokedex.component.scss']
})
export class CreatePokedexComponent implements OnInit {
  pokedexForm: FormGroup
  title = 'New Pokemon'
  action = 'Add'
  id: string | null

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, private pokemonsService: PokemonsService, private aRouter: ActivatedRoute) { 
    this.pokedexForm = this.fb.group({
      name: ['', Validators.required],
      level: ['', Validators.required],
      favourite: [false, Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.updatePokemon()
  }

  addPokemon() {
    const pokemon: Pokedex = {
      name: this.pokedexForm.get('name')?.value,
      level: this.pokedexForm.get('level')?.value,
      favourite: this.pokedexForm.get('favourite')?.value
    }

    if(this.id !== null) {
      // Update Pokemon
      const obs$ = this.pokemonsService.updatePokemon(this.id, pokemon).subscribe((data) => {
        this.toastr.info('Pokemon updated successfully')
        this.router.navigate(['/pokedex'])
        this.pokedexForm.reset()
        obs$.unsubscribe()
      })
    } else {
      // Create Pokemon
      const obs$ = this.pokemonsService.createPokemon(pokemon).subscribe((data) => {
        this.toastr.success('Pokemon added successfully')
        this.router.navigate(['/pokedex'])
        this.pokedexForm.reset()
        obs$.unsubscribe()
      })
    }
  }

  updatePokemon() {
    if(this.id !== null) {
      this.title = 'Update Pokemon'
      this.action = 'Update'
      const obs$ = this.pokemonsService.getPokemonById(this.id).subscribe((data) => {
        this.pokedexForm.setValue({
          name: data.name,
          level: data.level,
          favourite: data.favourite 
        })
        obs$.unsubscribe()
      })
    }

  }
}
