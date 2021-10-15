/* eslint-disable class-methods-use-this */
/* eslint-disable no-empty-function */
/* eslint-disable import/prefer-default-export */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
