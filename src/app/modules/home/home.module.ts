import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './pages/home/home.page';
import {HomeRoutingModule} from './home-routing.module';
import { MissionComponent } from './components/mission/mission.component';
import { BestProjectsComponent } from './components/best-projects/best-projects.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContributeComponent } from './components/contribute/contribute.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { MatCardModule } from '@angular/material/card';

const components: any = [
  MissionComponent
];

const pages = [
  HomePageComponent
];

@NgModule({
    imports: [
      CommonModule,
      HomeRoutingModule,
      MatCardModule
    ],
  declarations: [...components, ...pages, MissionComponent, BestProjectsComponent, AboutUsComponent, ContributeComponent, ProjectsComponent],
  exports: [...components, ...pages]
})
export class HomeModule {
}
