"use strict";
class Originator {
    constructor(state) {
        this.state = state;
    }
    // Getter for state
    getState() {
        return this.state;
    }
    // Setter for state
    setState(state) {
        this.state = state;
    }
    // Create a Memento to save the Current state
    createMemento() {
        return new Memento(this.state);
    }
    // Restore the Originator's state from Memento
    restore(memento) {
        this.state = memento.getState();
    }
}
class Memento {
    constructor(state) {
        this.state = state;
    }
    // Getter for state
    getState() {
        return this.state;
    }
}
class Caretaker {
    constructor() {
        /*
        caretaker sınıfı memento objelerini yönetmekten sorumludur, memento objelerini saklar ve gerektiğinde originator'a geri verir
        careteker sınıfı memennto objelerini bir liste içerisinde tutar ve buraya ekleme ve çıkarma işlemlerini gerçekleştirir
        bunu addMememento ve getLastMemento metodları ile yapar
        ancak burada önemli bir nokta vardır careteker sınıfı memento objelerinin içeriğine erişimez sadece onları saklar ve geri verir
        */
        this.mementos = [];
    }
    // store a memento
    addMemento(memento) {
        this.mementos.push(memento);
    }
    // retrieve a memento
    getLastMemento() {
        return this.mementos.pop();
    }
}
// Example usage:
class MementoPatternDemo {
    static main() {
        const originator = new Originator("State1");
        const caretaker = new Caretaker();
        console.log("Initial State: " + originator.getState());
        // Save state to memento
        caretaker.addMemento(originator.createMemento());
        // Change state
        originator.setState("State2");
        console.log("State after change: " + originator.getState());
        // Restore state from memento
        const memento = caretaker.getLastMemento();
        if (memento) {
            originator.restore(memento);
        }
        console.log("State after restore: " + originator.getState());
    }
}
MementoPatternDemo.main();
//# sourceMappingURL=MementoPattern.js.map