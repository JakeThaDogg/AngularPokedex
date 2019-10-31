import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit, OnChanges {

  @Input() entries;
  selectedEntry;
  constructor() { }

  ngOnInit() {
    this.selectedEntry = this.entries[0].flavor_text;
  }

  getEntry(version) {
    // Get selected entry by filtering on the version, then returns the text with .flavor_text
    this.selectedEntry = this.entries.filter(entry => entry.version === version)[0].flavor_text;
  }

  ngOnChanges() {
    this.selectedEntry = this.entries[0].flavor_text;
  }

}
