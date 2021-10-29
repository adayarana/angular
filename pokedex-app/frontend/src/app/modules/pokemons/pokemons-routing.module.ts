import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouritesComponent } from 'src/app/components/favourites/favourites.component';
import { PokedexComponent } from '../../components/pokedex/pokedex.component';
import { CreatePokedexComponent } from '../../components/create-pokedex/create-pokedex.component'
import { PokemonComponent } from '../../components/pokemon/pokemon.component';
import { PokemonsComponent } from './pokemons.component';

const routes: Routes = [
  { path: '', component: PokemonsComponent },
  { path: 'pokemon', component: PokemonComponent },
  { path: 'favourites', component: FavouritesComponent },
  { path: 'pokedex', component: PokedexComponent },
  { path: 'create-pokedex', component: CreatePokedexComponent },
  { path: 'edit-pokedex/:id', component: CreatePokedexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }
