interface state {
    playTusunaBas(arg0: Mp3Calar): void;
    durTusunaBas(arg0: Mp3Calar): void;
}
declare class Mp3Calar {
    private currentState;
    constructor();
    setState(state: state): void;
    playTusunaBas(): void;
    durTusunaBas(): void;
}
declare class OynatState implements state {
    playTusunaBas(_context: Mp3Calar): void;
    durTusunaBas(context: Mp3Calar): void;
}
declare class DurState implements state {
    playTusunaBas(context: Mp3Calar): void;
    durTusunaBas(_context: Mp3Calar): void;
}
declare const mp3Calar: Mp3Calar;
//# sourceMappingURL=StatePattern.d.ts.map