import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactPageComponent} from './pages/contact/contact.page';

const routes: Routes = [
  {
    path: '',
    component: ContactPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {
}