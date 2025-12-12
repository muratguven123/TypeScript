declare class TextEditor {
    private content;
    constructor();
    getText(): string;
    setText(newContent: string): void;
    createMememento(): TextEditorMemento;
    restore(memento: TextEditorMemento): void;
}
declare class TextEditorMemento {
    private readonly text;
    constructor(text: string);
    getText(): string;
}
declare class TextEditorCaretaker {
    private undoStack;
    private redoStack;
    addMemento(memento: TextEditorMemento): void;
    undo(editor: TextEditor): void;
    redo(editor: TextEditor): void;
}
declare class TextEditorDemo {
    static main(): void;
}
//# sourceMappingURL=TextEditor.d.ts.map