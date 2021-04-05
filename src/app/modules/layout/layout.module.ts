import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {LayoutPageComponent} from './pages/layout/layout.page';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

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
  declarations: [...components, ...pages, FooterComponent],
  exports: [...components, ...pages]
})
export class LayoutModule {
}
