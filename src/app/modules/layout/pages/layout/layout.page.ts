import {Component} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {AbstractPage} from '../../../abstract-page';

@Component({
  selector: 'app-layout-page',
  templateUrl: 'layout.page.html'
})
export class LayoutPageComponent extends AbstractPage {


  constructor(protected title: Title,
              protected meta: Meta) {
    super(title, meta);
  }

}
