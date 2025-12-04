class Originator {
    //originator sınıfı objenin state'ini tutar
    // ve memento objesi oluşturarak state'in kaydedilmesini sağlar
    //memento sınıfı iki kritik metoda sahiptir createMemento ve restore, createMemento mevcut state'te tutulan memento objesini oluşturur
    // restore ise memento objesinden state'i geri yükler
    private state :string;

    constructor(state: string) {
        this.state = state;
    }
    // Getter for state
    getState(): string{
        return this.state;
    }
    // Setter for state
    setState(state:string):void{
        this.state = state;
    }
    // Create a Memento to save the Current state
    createMemento(): Memento {
        return new Memento(this.state);
    }
    // Restore the Originator's state from Memento
    restore(memento: Memento): void {
        this.state = memento.getState();
    }
}

class Memento {
/*
memento sınıfı originator state'ini saklar ve oluşuturulduktan sonra asla değiştirilemez
bunu içerisinde sadece statei almak için bir private değişken ve getter metodu bulunur
memento sınıfı karakterislik özelliği değişilemez (immutable)
*/
    private state: string;
    constructor(state: string) {
        this.state = state;
    }

    // Getter for state
    getState(): string {
        return this.state;
    }
}
class Caretaker {
    /*
    caretaker sınıfı memento objelerini yönetmekten sorumludur, memento objelerini saklar ve gerektiğinde originator'a geri verir
    careteker sınıfı memennto objelerini bir liste içerisinde tutar ve buraya ekleme ve çıkarma işlemlerini gerçekleştirir
    bunu addMememento ve getLastMemento metodları ile yapar
    ancak burada önemli bir nokta vardır careteker sınıfı memento objelerinin içeriğine erişimez sadece onları saklar ve geri verir
    */
    private mementos: Memento[] = [];

    // store a memento
    addMemento(memento: Memento): void {
        this.mementos.push(memento);
    }
    // retrieve a memento
    getLastMemento(): Memento | undefined {
        return this.mementos.pop();
    }
}
// Example usage:
class MementoPatternDemo {
    static main(): void {
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