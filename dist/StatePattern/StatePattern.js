"use strict";
class Mp3Calar {
    constructor() {
        this.currentState = new DurState();
    }
    setState(state) {
        this.currentState = state;
    }
    playTusunaBas() {
        this.currentState.playTusunaBas(this);
    }
    durTusunaBas() {
        this.currentState.durTusunaBas(this);
    }
}
class OynatState {
    playTusunaBas(_context) {
        console.log("Zaten müzik çalıyor.");
    }
    durTusunaBas(context) {
        console.log("Müzik durduruldu.");
        context.setState(new DurState());
    }
}
class DurState {
    playTusunaBas(context) {
        console.log("Müzik çalıyor.");
        context.setState(new OynatState());
    }
    durTusunaBas(_context) {
        console.log("Müzik zaten durdurulmuş.");
    }
}
const mp3Calar = new Mp3Calar();
mp3Calar.playTusunaBas();
mp3Calar.playTusunaBas();
mp3Calar.durTusunaBas();
mp3Calar.durTusunaBas();
//# sourceMappingURL=StatePattern.js.map