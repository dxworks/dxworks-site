import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {LayoutPageComponent} from './pages/layout/layout.page';
import { HeaderComponent } from './components/header/header.component';

const components: any = [
  HeaderComponent
];

const pages = [
  LayoutPageComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [...components, ...pages],
  exports: [...components, ...pages]
})
export class LayoutModule {
}
