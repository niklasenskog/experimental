import {bootstrap} from "angular2/platform/browser";
import {Component} from "angular2/core";
import {LoggerDirective as Logger} from "./app/directives/logger.ts"

@Component({
    selector: "hello-world",
    template: "<h1>Hello {{ name }}!</h1> <input type=\"text\" log-directive/>",
    directives: [Logger]
})
class HelloWorldComponent {
    name: string;
    constructor() {
        this.name = "Angular";
    }
}
bootstrap(HelloWorldComponent);