import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pokedex } from 'src/interfaces/pokedex.interface';

@Component({
  selector: 'app-create-pokedex',
  templateUrl: './create-pokedex.component.html',
  styleUrls: ['./create-pokedex.component.scss']
})
export class CreatePokedexComponent implements OnInit {
  pokedexForm: FormGroup

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService) { 
    this.pokedexForm = this.fb.group({
      name: ['', Validators.required],
      level: ['', Validators.required],
      favourite: [false, Validators.required]
    })
  }

  ngOnInit(): void {
  }

  addPokemon() {
    const pokemon: Pokedex = {
      name: this.pokedexForm.get('name')?.value,
      level: this.pokedexForm.get('level')?.value,
      favourite: this.pokedexForm.get('favourite')?.value
    }
    this.toastr.success('Pokemon added successfully')
    this.router.navigate(['/pokedex'])
  }

}
