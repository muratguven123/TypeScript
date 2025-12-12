"use strict";
// Originator: The Repository that holds  current state of the codebase
class Repository {
    constructor() {
        this.files = new Map();
    }
    setFile(filename, content) {
        this.files.set(filename, content);
    }
    getFile(filename) {
        return this.files.get(filename);
    }
    createMemento() {
        return new VCSMemento(this.files);
    }
    restore(memento) {
        this.files = memento.getFiles();
    }
}
class VCSMemento {
    constructor(files) {
        // Create a deep copy of the files map to ensure immutability
        this.files = new Map(files);
    }
    getFiles() {
        return new Map(this.files);
    }
}
class VersionControl {
    constructor() {
        this.undoStack = [];
        this.redoStack = [];
    }
    commit(Repository) {
        this.undoStack.push(Repository.createMemento());
        this.redoStack = []; // Clear redo stack on new commit
    }
    undo(Repository) {
        if (this.undoStack.length < 2)
            return;
        const currentMemento = this.undoStack.pop();
        if (currentMemento) {
            this.redoStack.push(currentMemento);
            const previousMemento = this.undoStack[this.undoStack.length - 1];
            if (previousMemento) {
                Repository.restore(previousMemento);
            }
        }
    }
    redo(Repository) {
        const redoState = this.redoStack.pop();
        if (redoState) {
            this.undoStack.push(redoState);
            Repository.restore(redoState);
        }
    }
}
// Example usage:
const repo = new Repository();
const vcs = new VersionControl();
repo.setFile("file1.txt", "Initial content");
vcs.commit(repo);
repo.setFile("file1.txt", "Updated content");
console.log("Current Content:", repo.getFile("file1.txt")); // Updated content
vcs.undo(repo);
console.log("After Undo:", repo.getFile("file1.txt")); // Initial content
vcs.redo(repo);
console.log("After Redo:", repo.getFile("file1.txt")); // Updated content
//# sourceMappingURL=VCS.js.map