import {Component, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutPageComponent} from './modules/layout/pages/layout/layout.page';

@Component({
  template: '<h2>Page not found</h2>'
})
export class PageNotFoundComponent {
}

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'projects',
        loadChildren: () => import('./modules/projects/projects.module').then(m => m.ProjectsModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64],
    }),
  ],
  declarations: [
    PageNotFoundComponent
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
