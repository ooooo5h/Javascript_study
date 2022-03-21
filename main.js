class Counter {
    constructor() {
        this.counter = 0;
    }

    increase(runIf5Times) {
        this.counter++;
        console.log(this.counter);
        if (this.counter % 5 === 0) {
            runIf5Times(this.counter)
        }
    }
}

const coolCounter = new Counter();

function alertNum(num) {
    alert(`wow! ${num}`);
}

function printSomething(num) {
    console.log(`wow! ${num}`);
}

coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(alertNum);
coolCounter.increase(printSomething);
