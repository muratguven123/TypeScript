interface aircragVisitor {
    visitEngine(engine: Engine): void;
    visitWings(wings: Wings): void;
}
interface aircraftPart {
    accept(visitor: aircragVisitor): void;
}
class Engine implements aircraftPart {
    public accept(visitor: aircragVisitor): void {
        visitor.visitEngine(this);
    }
    public startEngine(): string {
        return "Engine started.";
    }
}
class Wings implements aircraftPart {
    public accept(visitor: aircragVisitor): void {
        visitor.visitWings(this);
    }   
    public deployWings(): string {
        return "Wings deployed.";
    }
}
class MaintenanceVisitor implements aircragVisitor {
    public visitEngine(engine: Engine): void {
        console.log("Performing maintenance on engine.");
        console.log(engine.startEngine());
    }
    public visitWings(wings: Wings): void {
        console.log("Performing maintenance on wings.");
        console.log(wings.deployWings());
    }
}
class InspectionVisitor implements aircragVisitor {
    public visitEngine(engine: Engine): void {
        console.log("Inspecting engine.");
        console.log(engine.startEngine());
    }
    public visitWings(wings: Wings): void {
        console.log("Inspecting wings.");
        console.log(wings.deployWings());
    }
}
class softwareUpdateVisitor implements aircragVisitor {
    public visitEngine(engine: Engine): void {
        console.log("Updating software for engine.");
        console.log(engine.startEngine());
    }
    public visitWings(wings: Wings): void {
        console.log("Updating software for wings.");
        console.log(wings.deployWings());
    }
}

// --- Client Code ---
const parts: aircraftPart[] = [new Engine(), new Wings()];
const maintenanceVisitor = new MaintenanceVisitor();
const inspectionVisitor = new InspectionVisitor();
const softwareUpdateVisitorInstance = new softwareUpdateVisitor();
for (const part of parts) {
    part.accept(maintenanceVisitor);
}   
for (const part of parts) {
    part.accept(inspectionVisitor);
}
for (const part of parts) {
    part.accept(softwareUpdateVisitorInstance);
}   
console.log("All operations completed.");