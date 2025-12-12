interface ILandingMediator {
    sendMassege(message: string, plane: Plane): void;
    addPlane(plane: Plane): void;
}
declare class LandingMediator implements ILandingMediator {
    private planes;
    constructor();
    sendMassege(message: string, plane: Plane): void;
    addPlane(plane: Plane): void;
}
declare abstract class Plane {
    protected mediator: ILandingMediator;
    protected isim: string;
    constructor(isim: string, mediator: ILandingMediator);
    abstract send(msg: string): void;
    abstract receive(msg: string): void;
}
declare class ConcretePlane extends Plane {
    send(msg: string): void;
    receive(msg: string): void;
}
declare const mediator: LandingMediator;
declare const plane1: ConcretePlane;
declare const plane2: ConcretePlane;
declare const plane3: ConcretePlane;
declare function sendMassege(): void;
//# sourceMappingURL=mediator.d.ts.map