import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  photoCover:string="https://sm.ign.com/ign_br/blogroll/a/attack-on-/attack-on-titan-the-final-season-part-3s-first-episode-isnt_d2bg.jpg"
  contentTitle:string=""
  contentDescription=""
  constructor() { }

  ngOnInit(): void {
  }

}
