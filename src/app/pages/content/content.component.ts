import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake'
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string="https://sm.ign.com/ign_br/blogroll/a/attack-on-/attack-on-titan-the-final-season-part-3s-first-episode-isnt_d2bg.jpg"
  contentTitle:string="Minha notícia"
  contentDescription="lorem ipsum"



  constructor(
    private route:ActivatedRoute
    ) {

  }

  ngOnInit(): void {

  }







}
