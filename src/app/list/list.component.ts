import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  pokemons = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    this.apiService.getPokemons()
    .subscribe(pokemons => {
      // Pokemon.results contains only the name and API url of the pokemon
      this.getPokemonByUrl(pokemons.results);
    });
  }

  // Get pokemons details by calling the API for each pokemon
  getPokemonByUrl(pokemonArray) {
    for (const poke of pokemonArray) {
      this.apiService.getPokemonByUrl(poke.url).subscribe(pokemon => {
        this.pokemons.push(pokemon);
        });
    }
  }



}
