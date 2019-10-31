import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { getPokemonImageById } from '../utils/helper';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  id: number;
  imgUrl: string;
  pokemon;

  entriesFR;

  constructor(private route: ActivatedRoute, private service: ApiService) {
    this.route.params.subscribe(param => {
      this.id = param.id;
      this.imgUrl = getPokemonImageById(this.id.toString());
      this.getPokemonData();
    });
  }

  ngOnInit() {
  }

  getPokemonData() {
    this.service.getPokemonById(this.id).subscribe(pokemon => {
      this.entriesFR = pokemon.flavor_text_entries.filter(entry => entry.language.name === 'fr');

      this.pokemon = pokemon;
    });
  }

}
