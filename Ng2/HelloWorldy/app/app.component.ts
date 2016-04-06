import {Component} from 'angular2/core';

// Annotation section
@Component({
  selector: 'my-app',
  template: `<p>My name: {{ name }}</p>
  <p>Friends:</p>
  <ul>
     <li *ngFor="#name of avengers #ix=index">
        {{ name }} nr {{(ix+1) *5}}
     </li>
  </ul>`
})

export class AppComponent {
      name: string;
      avengers : Array<string> =  ["Captain America", "Hulk", "Thor"];
      constructor() {
        this.name = 'Bear2';
      }
    }