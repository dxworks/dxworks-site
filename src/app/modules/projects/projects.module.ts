import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectsPageComponent} from './pages/projects/projects.page';
import {ProjectsRoutingModule} from './projects-routing.module';

const components: any = [];

const pages = [
  ProjectsPageComponent
];

@NgModule({
    imports: [
      CommonModule,
      ProjectsRoutingModule
    ],
  declarations: [...components, ...pages],
  exports: [...components, ...pages]
})
export class ProjectsModule {
}
