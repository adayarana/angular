/* eslint-disable class-methods-use-this */
/* eslint-disable no-empty-function */
/* eslint-disable import/prefer-default-export */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
