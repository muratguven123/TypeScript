interface state {
    playTusunaBas(arg0: Mp3Calar ): void;
    durTusunaBas(arg0: Mp3Calar): void;
}
class Mp3Calar {
    private currentState: state;
    constructor() {
        this.currentState = new DurState();
    }
    public setState(state: state): void {
        this.currentState = state;
    }
    public playTusunaBas(): void {
        this.currentState.playTusunaBas(this);
    }
    public durTusunaBas(): void {
        this.currentState.durTusunaBas(this);
    }

}
class OynatState implements state {
    public playTusunaBas(_context: Mp3Calar): void {
        console.log("Zaten müzik çalıyor.");
    }
    public durTusunaBas(context: Mp3Calar): void {
        console.log("Müzik durduruldu.");
        context.setState(new DurState());
    }
}
class DurState implements state {
    public playTusunaBas(context: Mp3Calar): void {
        console.log("Müzik çalıyor.");
        context.setState(new OynatState());
    }
    public durTusunaBas(_context: Mp3Calar): void {
        console.log("Müzik zaten durdurulmuş.");
    }
}
const mp3Calar = new Mp3Calar();
mp3Calar.playTusunaBas();
mp3Calar.playTusunaBas();
mp3Calar.durTusunaBas();
mp3Calar.durTusunaBas();
