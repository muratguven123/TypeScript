interface aircragVisitor {
    visitEngine(engine: Engine): void;
    visitWings(wings: Wings): void;
}
interface aircraftPart {
    accept(visitor: aircragVisitor): void;
}
declare class Engine implements aircraftPart {
    accept(visitor: aircragVisitor): void;
    startEngine(): string;
}
declare class Wings implements aircraftPart {
    accept(visitor: aircragVisitor): void;
    deployWings(): string;
}
declare class MaintenanceVisitor implements aircragVisitor {
    visitEngine(engine: Engine): void;
    visitWings(wings: Wings): void;
}
declare class InspectionVisitor implements aircragVisitor {
    visitEngine(engine: Engine): void;
    visitWings(wings: Wings): void;
}
declare class softwareUpdateVisitor implements aircragVisitor {
    visitEngine(engine: Engine): void;
    visitWings(wings: Wings): void;
}
declare const parts: aircraftPart[];
declare const maintenanceVisitor: MaintenanceVisitor;
declare const inspectionVisitor: InspectionVisitor;
declare const softwareUpdateVisitorInstance: softwareUpdateVisitor;
//# sourceMappingURL=VisitorPattern.d.ts.map