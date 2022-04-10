import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lv-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  searchText: string;

  @Output()
  search: EventEmitter<String> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clickSearch(): void {
    this.search.emit(this.searchText);
  }

}
