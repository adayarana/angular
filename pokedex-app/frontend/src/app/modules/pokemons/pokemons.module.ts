import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components

import { PokemonsComponent } from './pokemons.component';
import { PokemonComponent } from '../../components/pokemon/pokemon.component';
import { PokedexComponent } from '../../components/pokedex/pokedex.component';
import { CreatePokedexComponent } from '../../components/create-pokedex/create-pokedex.component';

@NgModule({
  declarations: [
    PokemonsComponent,
    PokemonComponent,
    PokedexComponent,
    CreatePokedexComponent
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PokemonsModule { }
