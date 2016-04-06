import {Component, OnInit} from 'angular2/core';

import {RoomComponent} from './room.component';


@Component({
  selector: 'my-app',
  template: `<div class="container">
                <h2>{{title}}</h2>
                <dungeon-form></dungeon-form>
            </div>
  `,
  directives: [RoomComponent]
})


export class AppComponent  {
  public title = 'Submit your dungeon ...';

  //left here for educational purposes....
  constructor() { }
}