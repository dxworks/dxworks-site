import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactRoutingModule} from './contact-routing.module';
import {ContactPageComponent} from './pages/contact/contact.page';

const components: any = [];

const pages = [
  ContactPageComponent
];

@NgModule({
    imports: [
        CommonModule,
        ContactRoutingModule
    ],
  declarations: [...components, ...pages],
  exports: [...components, ...pages]
})
export class ContactModule {
}
