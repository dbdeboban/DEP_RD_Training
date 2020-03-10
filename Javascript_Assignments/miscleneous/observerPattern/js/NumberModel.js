class NumberModel {
    constructor() {
        this.number = 0;
        this.color = 'red';
        this.observers = [];
    }

    addObserver(o) {
        this.observers.push(o);
    }

    increment() {
        const colors = ['orange', 'red', 'green', 'blue', 'cyan', 'brown', 'cadetblue', 'chocolate'];

        this.number++;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.notifyObservers();
    }
    notifyObservers() {
        for (let o of this.observers) {
            o.update(this);
        }
    }

}