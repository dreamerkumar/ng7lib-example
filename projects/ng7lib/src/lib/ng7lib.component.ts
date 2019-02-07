import { SomeClass } from './shared/some.class';
import { Component, OnInit } from '@angular/core';
// /todo import * as nameparser from 'another-name-parser';
import nameparser from 'another-name-parser';
@Component({
  selector: 'lib-ng7lib',
  template: `
    <p>
      ng7lib works! Value of name is {{name| json }}
    </p>
    <p>
      someValue is {{someValue}}
    </p>
    <div (click)="doLogin()"></div>
  `,
  styles: []
})
export class Ng7libComponent implements OnInit {
  name: string;
  someValue: string;
  constructor() { }

  ngOnInit() {
    this.name = nameparser('Commissioner James "Jim" W. Gordon, Sr.');
    this.someValue = SomeClass.get();
  }

}
