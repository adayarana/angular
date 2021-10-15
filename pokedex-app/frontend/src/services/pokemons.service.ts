import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export default class PokemonsService {
    private apiUrl = environment.pokemonApiURL;

    constructor(private http: HttpClient) { }

    getProducts():Observable<any> {
      return this.http.get(this.apiUrl);
    }
}
