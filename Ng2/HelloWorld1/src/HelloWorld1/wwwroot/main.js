System.register(["angular2/platform/browser", "angular2/core", "./app/directives/logger.ts"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var browser_1, core_1, logger_ts_1;
    var HelloWorldComponent;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logger_ts_1_1) {
                logger_ts_1 = logger_ts_1_1;
            }],
        execute: function() {
            HelloWorldComponent = (function () {
                function HelloWorldComponent() {
                    this.name = "Angular";
                }
                HelloWorldComponent = __decorate([
                    core_1.Component({
                        selector: "hello-world",
                        template: "<h1>Hello {{ name }}!</h1> <input type=\"text\" log-directive/>",
                        directives: [logger_ts_1.LoggerDirective]
                    })
                ], HelloWorldComponent);
                return HelloWorldComponent;
            })();
            browser_1.bootstrap(HelloWorldComponent);
        }
    }
});
