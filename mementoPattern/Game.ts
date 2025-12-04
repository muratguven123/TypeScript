// Originator: The Game
class Game{
    private health: number;
    private score: number;
    private level: number;

    constructor(health: number, score: number, level: number) {
        this.health = health;
        this.score = score;
        this.level = level;
    }
    // Getter for current game state
    getState(): string {
        return `Health: ${this.health}, Score: ${this.score}, Level: ${this.level}`;
    }
    setState(health:number,score:number,level:number):void{
        this.health = health;
        this.score = score;
        this.level = level;
    }
    createMemento(): GameMemento {
        return new GameMemento(this.health, this.score, this.level);
    }
    restoreMemento(memento: GameMemento): void {
        const state = memento.getState();
        this.health = state.health;
        this.score = state.score;
        this.level = state.level;
    }
}
class GameMemento {
    private health: number;
    private score: number;
    private level: number;
    constructor(health: number, score: number, level: number) {
        this.health = health;
        this.score = score;
        this.level = level;
    }
    getState(): {health:number, score:number, level:number} {
        return {
            health: this.health,
            score: this.score,
            level: this.level
        };
    }

}
class GameCaretaker {
    private mementos: GameMemento[] = []
    addMemento(memento: GameMemento): void {
        this.mementos.push(memento);
    }
    getLastMemento(): GameMemento | undefined {
        return this.mementos.pop();
    }
}
// Example usage:
class GameMementoDemo {
    static main(): void {
        const game = new Game(100, 0, 1);
        const caretaker = new GameCaretaker();  
        console.log("Initial State:", game.getState());
        // Save state
        caretaker.addMemento(game.createMemento());
        // Change state
        game.setState(80, 150, 2);
        console.log("State after changes:", game.getState());
        // Restore state
        const memento = caretaker.getLastMemento(); 
        if (memento) {
            game.restoreMemento(memento);
        }
        console.log("State after restoration:", game.getState());
    }
}
GameMementoDemo.main();