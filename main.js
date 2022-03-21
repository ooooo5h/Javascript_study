class Counter {
    constructor() {
        this.counter = 0;
    }

    increase() {
        this.counter++;
        console.log(this.counter);
        if (this.counter % 5 === 0) {
            console.log('yo')
        }
    }
}

const coolCounter = new Counter();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
