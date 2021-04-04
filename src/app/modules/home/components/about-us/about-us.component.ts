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
      image: '',
      contact: ''
    },
    {
      name: 'Mario Rivis',
      role: 'Small Master',
      description: '',
      image: '',
      contact: ''
    },
    {
      name: 'Darius Nagy',
      role: 'Sensei',
      description: '',
      image: '',
      contact: ''
    },
    {
      name: 'Alexandra Ionel',
      role: 'Frontend Guru',
      description: '',
      image: '',
      contact: ''
    },
    {
      name: 'Andy Molin',
      role: 'The Virtuous One',
      description: '',
      image: '',
      contact: ''
    },
    {
      name: 'Denis Feier',
      role: 'to be decided',
      description: '',
      image: '',
      contact: ''
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
