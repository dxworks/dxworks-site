import {Directive} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Directive()
export abstract class AbstractPage {

  protected constructor(protected title: Title,
                        protected meta: Meta) {
  }

  setMeta(title: string, description: string) {
    this.title.setTitle(title);
    this.meta.updateTag({
      name: 'description',
      content: description
    });
  }
}
