System.register(["angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var core_1;
    var LoggerDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LoggerDirective = (function () {
                function LoggerDirective() {
                }
                LoggerDirective.prototype.onInput1 = function (event) {
                    console.log(event.target.va.value);
                };
                LoggerDirective.prototype.onInput2 = function (event) {
                    this.debounce(this.log(event.target.value), 1000);
                };
                LoggerDirective.prototype.onInput3 = function (event) {
                    this.throttle(this.log(event.target.value), 5000);
                };
                LoggerDirective.prototype.log = function (message) {
                    console.log(message);
                };
                LoggerDirective.prototype.debounce = function (fn, delay) {
                    var timer = null;
                    return function () {
                        var _this = this;
                        var args = arguments;
                        clearTimeout(timer);
                        timer = setTimeout(function () {
                            fn.apply(_this, args);
                        }, delay);
                    };
                };
                LoggerDirective.prototype.throttle = function (fn, threshhold, scope) {
                    if (scope === void 0) { scope = null; }
                    threshhold || (threshhold = 250);
                    var last, deferTimer;
                    return function () {
                        var context = scope || this;
                        var now = +new Date, args = arguments;
                        if (last && now < last + threshhold) {
                            // hold on to it
                            clearTimeout(deferTimer);
                            deferTimer = setTimeout(function () {
                                last = now;
                                fn.apply(context, args);
                            }, threshhold);
                        }
                        else {
                            last = now;
                            fn.apply(context, args);
                        }
                    };
                };
                LoggerDirective = __decorate([
                    core_1.Directive({
                        selector: "input[log-directive]",
                        host: {
                            "(input)": "onInput2($event)"
                        }
                    })
                ], LoggerDirective);
                return LoggerDirective;
            })();
            exports_1("LoggerDirective", LoggerDirective);
        }
    }
});
