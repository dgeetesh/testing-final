import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listenOnClick:any;
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    return this.listenOnClick = 'The On click event is called';
  }
}
