"use strict";
class Engine {
    accept(visitor) {
        visitor.visitEngine(this);
    }
    startEngine() {
        return "Engine started.";
    }
}
class Wings {
    accept(visitor) {
        visitor.visitWings(this);
    }
    deployWings() {
        return "Wings deployed.";
    }
}
class MaintenanceVisitor {
    visitEngine(engine) {
        console.log("Performing maintenance on engine.");
        console.log(engine.startEngine());
    }
    visitWings(wings) {
        console.log("Performing maintenance on wings.");
        console.log(wings.deployWings());
    }
}
class InspectionVisitor {
    visitEngine(engine) {
        console.log("Inspecting engine.");
        console.log(engine.startEngine());
    }
    visitWings(wings) {
        console.log("Inspecting wings.");
        console.log(wings.deployWings());
    }
}
class softwareUpdateVisitor {
    visitEngine(engine) {
        console.log("Updating software for engine.");
        console.log(engine.startEngine());
    }
    visitWings(wings) {
        console.log("Updating software for wings.");
        console.log(wings.deployWings());
    }
}
// --- Client Code ---
const parts = [new Engine(), new Wings()];
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
//# sourceMappingURL=VisitorPattern.js.map