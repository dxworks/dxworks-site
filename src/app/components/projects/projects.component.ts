import { Component, OnInit } from '@angular/core';
import {ProjectsService} from './projects.service';
import {Observable, of} from 'rxjs';
import {RepositoryMeta} from '../../../types/RepositoryMeta';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: RepositoryMeta[] = [];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projectsService.getProjects()
      .subscribe(projects => this.projects = projects.sort((p1, p2) => p1.relevance - p2.relevance));
  }

}
