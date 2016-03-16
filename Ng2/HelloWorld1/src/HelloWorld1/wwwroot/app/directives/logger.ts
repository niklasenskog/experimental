import {Directive, Input} from "angular2/core";

@Directive({
    selector: "input[log-directive]",
    host: {
        "(input)": "onInput2($event)"
    }
})
export class LoggerDirective {

    onInput1(event: any) {
        console.log(event.target.va   .value);
    }

    onInput2(event: any) {
        this.debounce(this.log(event.target.value), 1000);
    }

    onInput3(event: any) {
        this.throttle(this.log(event.target.value), 5000);
    }

    log(message: string) {
        console.log(message);
    }

    debounce(fn: Function, delay: number) {
        var timer = null;
        return function () {
            var args = arguments;
            clearTimeout(timer);
            timer = setTimeout(() => {
                fn.apply(this, args);
            }, delay);
        };
    }

    throttle(fn, threshhold: number, scope: any = null) {
        threshhold || (threshhold = 250);
        var last,
            deferTimer;
        return function () {
            var context = scope || this;

            var now = +new Date,
                args = arguments;
            if (last && now < last + threshhold) {
                // hold on to it
                clearTimeout(deferTimer);
                deferTimer = setTimeout(function () {
                    last = now;
                    fn.apply(context, args);
                }, threshhold);
            } else {
                last = now;
                fn.apply(context, args);
            }
        };
    }
}