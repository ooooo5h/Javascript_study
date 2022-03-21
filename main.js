class Counter {
    constructor(runEveryFiveTimes) {
        this.counter = 0;
        this.callback = runEveryFiveTimes;
    }

    increase() {
        this.counter++;
        console.log(this.counter);
        if (this.counter % 5 === 0) {
            this.callback(this.counter)
        }
    }
}

function alertNum(num) {
    alert(`wow! ${num}`);
}

function printSomething(num) {   // callback은 여기를 가르키고 있음.
    console.log(`wow! ${num}`);
}

const coolCounter = new Counter(alertNum);   // 여기를 alertNum으로 바꾸면 알림창을 띄움

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
