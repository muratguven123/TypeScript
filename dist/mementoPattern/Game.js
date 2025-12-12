"use strict";
// Originator: The Game
class Game {
    constructor(health, score, level) {
        this.health = health;
        this.score = score;
        this.level = level;
    }
    // Getter for current game state
    getState() {
        return `Health: ${this.health}, Score: ${this.score}, Level: ${this.level}`;
    }
    setState(health, score, level) {
        this.health = health;
        this.score = score;
        this.level = level;
    }
    createMemento() {
        return new GameMemento(this.health, this.score, this.level);
    }
    restoreMemento(memento) {
        const state = memento.getState();
        this.health = state.health;
        this.score = state.score;
        this.level = state.level;
    }
}
class GameMemento {
    constructor(health, score, level) {
        this.health = health;
        this.score = score;
        this.level = level;
    }
    getState() {
        return {
            health: this.health,
            score: this.score,
            level: this.level
        };
    }
}
class GameCaretaker {
    constructor() {
        this.mementos = [];
    }
    addMemento(memento) {
        this.mementos.push(memento);
    }
    getLastMemento() {
        return this.mementos.pop();
    }
}
// Example usage:
class GameMementoDemo {
    static main() {
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
//# sourceMappingURL=Game.js.map