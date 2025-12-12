declare class Repository {
    private files;
    constructor();
    setFile(filename: string, content: string): void;
    getFile(filename: string): string | undefined;
    createMemento(): VCSMemento;
    restore(memento: VCSMemento): void;
}
declare class VCSMemento {
    private readonly files;
    constructor(files: Map<string, string>);
    getFiles(): Map<string, string>;
}
declare class VersionControl {
    private undoStack;
    private redoStack;
    commit(Repository: Repository): void;
    undo(Repository: Repository): void;
    redo(Repository: Repository): void;
}
declare const repo: Repository;
declare const vcs: VersionControl;
//# sourceMappingURL=VCS.d.ts.map