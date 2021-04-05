import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  devs: any[] = [
    {
      name: 'Radu Marinescu',
      role: 'Great Master',
      description: '',
      image: 'assets/radu.jpg',
      contact: ''
    },
    {
      name: 'Mario Rivis',
      role: 'Small Master',
      description: '',
      image: 'assets/mario.jpg',
      contact: ''
    },
    {
      name: 'Darius Nagy',
      role: 'Sensei',
      description: '',
      image: 'assets/darius.jpg',
      contact: ''
    },
    {
      name: 'Alexandra Ionel',
      role: 'Frontend Guru',
      description: '',
      image: 'assets/ale.PNG',
      contact: ''
    },
    {
      name: 'Andy Molin',
      role: 'The Virtuous One',
      description: '',
      image: 'assets/andy.jpg',
      contact: ''
    },
    {
      name: 'Denis Feier',
      role: 'The New One',
      description: '',
      image: 'assets/denis.jpg',
      contact: ''
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
