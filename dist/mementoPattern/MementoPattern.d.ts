declare class Originator {
    private state;
    constructor(state: string);
    getState(): string;
    setState(state: string): void;
    createMemento(): Memento;
    restore(memento: Memento): void;
}
declare class Memento {
    private state;
    constructor(state: string);
    getState(): string;
}
declare class Caretaker {
    private mementos;
    addMemento(memento: Memento): void;
    getLastMemento(): Memento | undefined;
}
declare class MementoPatternDemo {
    static main(): void;
}
//# sourceMappingURL=MementoPattern.d.ts.map