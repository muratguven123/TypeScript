"use strict";
//The Originator: The Text Editor
class TextEditor {
    constructor() {
        this.content = '';
    }
    getText() {
        return this.content;
    }
    setText(newContent) {
        this.content = newContent;
    }
    // Create a memento to save the current text
    createMememento() {
        return new TextEditorMemento(this.content);
    }
    // Restore the text from a memento
    restore(memento) {
        this.content = memento.getText();
    }
}
// The Memento: Stores the state of the Text Editor
class TextEditorMemento {
    constructor(text) {
        this.text = text;
    }
    getText() {
        return this.text;
    }
}
class TextEditorCaretaker {
    constructor() {
        this.undoStack = [];
        this.redoStack = [];
    }
    //Add a Memento to the undo stack
    addMemento(memento) {
        this.undoStack.push(memento);
        this.redoStack = []; // Clear redo stack on new action
    }
    undo(editor) {
        if (this.undoStack.length < 2)
            return; // Nothing to undo
        const currentmemento = this.undoStack.pop();
        if (currentmemento) {
            this.redoStack.push(currentmemento);
            const previousMemento = this.undoStack[this.undoStack.length - 1];
            if (previousMemento) {
                editor.restore(previousMemento);
            }
        }
    }
    redo(editor) {
        const redoState = this.redoStack.pop();
        if (redoState) {
            this.undoStack.push(redoState);
            editor.restore(redoState);
        }
    }
}
// Example usage:
class TextEditorDemo {
    static main() {
        const editor = new TextEditor();
        const caretaker = new TextEditorCaretaker();
        editor.setText("Hello, World!");
        caretaker.addMemento(editor.createMememento());
        console.log("Current Text:", editor.getText());
        editor.setText("Hello, TypeScript!");
        caretaker.addMemento(editor.createMememento());
        console.log("Current Text:", editor.getText());
        caretaker.undo(editor);
        console.log("After Undo:", editor.getText());
        caretaker.redo(editor);
        console.log("After Redo:", editor.getText());
    }
}
//# sourceMappingURL=TextEditor.js.map