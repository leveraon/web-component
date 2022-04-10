import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lv-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  searchContent($event): void {
    console.log('searching ...', $event);
  }

}
