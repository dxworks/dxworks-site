import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './pages/home/home.page';
import {HomeRoutingModule} from './home-routing.module';
import { MissionComponent } from './components/mission/mission.component';
import { BestProjectsComponent } from './components/best-projects/best-projects.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

const components: any = [
  MissionComponent
];

const pages = [
  HomePageComponent
];

@NgModule({
    imports: [
      CommonModule,
      HomeRoutingModule
    ],
  declarations: [...components, ...pages, MissionComponent, BestProjectsComponent, AboutUsComponent],
  exports: [...components, ...pages]
})
export class HomeModule {
}
