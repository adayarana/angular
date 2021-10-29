import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-pokedex',
  templateUrl: './create-pokedex.component.html',
  styleUrls: ['./create-pokedex.component.scss']
})
export class CreatePokedexComponent implements OnInit {
  pokedexForm: FormGroup

  constructor(private fb: FormBuilder) { 
    this.pokedexForm = this.fb.group({
      name: ['', Validators.required],
      level: ['', Validators.required],
      favourite: [false, Validators.required]
    })
  }

  ngOnInit(): void {
  }

  addPokemon() {
    console.log(this.pokedexForm)
    console.log('Hola')
  }

}
