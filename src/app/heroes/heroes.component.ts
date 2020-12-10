import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Hero } from '../interfaces/Hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  ngOnInit(): void {
  }

}
