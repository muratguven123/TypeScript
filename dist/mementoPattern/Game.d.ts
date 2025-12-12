declare class Game {
    private health;
    private score;
    private level;
    constructor(health: number, score: number, level: number);
    getState(): string;
    setState(health: number, score: number, level: number): void;
    createMemento(): GameMemento;
    restoreMemento(memento: GameMemento): void;
}
declare class GameMemento {
    private health;
    private score;
    private level;
    constructor(health: number, score: number, level: number);
    getState(): {
        health: number;
        score: number;
        level: number;
    };
}
declare class GameCaretaker {
    private mementos;
    addMemento(memento: GameMemento): void;
    getLastMemento(): GameMemento | undefined;
}
declare class GameMementoDemo {
    static main(): void;
}
//# sourceMappingURL=Game.d.ts.map