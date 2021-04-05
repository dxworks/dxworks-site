import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [
    {
      displayName: 'Argumenthor',
      full_name: 'dxworks/argumenthor',
      relevance: 2,
      categories: ['library'],
      codeOwners: [
        {
          name: 'Mario Rivis'
        },
        {
          name: 'Darius Nagy'
        }
      ],
      technologies: ['kotlin', 'gradle'],
      version: '1.0.0',
      docs: 'https://dxworks.github.io/argumenthor'
    },
    {
      displayName: 'Kotlin Rest Client',
      full_name: 'dxworks/kotlin-rest-client',
      relevance: 2,
      categories: ['library'],
      codeOwners: [
        {
          name: 'Mario Rivis'
        },
        {
          name: 'Darius Nagy'
        }
      ],
      technologies: ['kotlin', 'maven'],
      version: '1.0.0',
      docs: 'https://dxworks.github.io/kotlin-rest-client'
    },
    {
      displayName: 'Insider',
      full_name: 'dxworks/insider',
      description: 'A tool that uses regular expressions to scan code smells, find dependencies between code entities, and detect topics used in a system',
      relevance: 1,
      categories: ['tool'],
      codeOwners: [
        {
          name: 'Mario Rivis'
        }
      ],
      technologies: ['kotlin', 'gradle'],
      docs: 'https://dxworks.github.io/insider'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
