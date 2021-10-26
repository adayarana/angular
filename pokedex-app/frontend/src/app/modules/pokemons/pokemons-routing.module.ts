import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouritesComponent } from 'src/app/components/favourites/favourites.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonsComponent } from './pokemons.component';

const routes: Routes = [
  { path: '', component: PokemonsComponent },
  { path: 'pokemon', component: PokemonComponent},
  { path: 'favourites', component: FavouritesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }
