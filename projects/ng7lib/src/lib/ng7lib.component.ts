import { SomeClass } from './shared';
import { Component, OnInit } from '@angular/core';
// /todo import * as nameparser from 'another-name-parser';
import nameparser from 'another-name-parser';
@Component({
  selector: 'lib-ng7lib',
  template: `
    <p>
      ng7lib works! Value of name is {{ name| json }}
    </p>
    <p>
      someValue is {{someValue}}
    </p>
    <p>
     An object is {{ anObject | json }}
    </p>
  `,
  styles: []
})
export class Ng7libComponent implements OnInit {
  name: string;
  someValue: string;
  anything;
  anObject = {
    a: 1,
    b: 2,
    c: {
      z: 1,
      y: 2,
      x: {
        y: 1,
        r: 2
      }
    }
  };
  constructor() { }

  ngOnInit() {
    this.name = nameparser('Commissioner James "Jim" W. Gordon, Sr.');
    this.someValue = SomeClass.get();
  }

}
