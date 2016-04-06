import {Component} from 'angular2/core';
import {FORM_PROVIDERS, FormBuilder, Validators} from 'angular2/common';
import {bootstrap} from 'angular2/platform/browser';
import {ControlMessages} from './control-messages.component';
import {ValidationService} from './validation.service';

@Component({
    selector: "dungeon-form",
    templateUrl: "./app/room.component.html",
})

export class RoomComponent {
    active: boolean;

    constructor(formBuilder = FormBuilder) {
        this.active = true;
        
        // this.dungeonForm = formBuilder.group
    }
    
    onSubmit(){
        alert("Hi!");
        // this.dungeonForm.
    }
}