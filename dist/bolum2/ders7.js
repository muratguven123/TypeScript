"use strict";
function greeting(_age, name) {
    if (name) {
        name?.toLocaleLowerCase();
        console.log("Hello" + name);
    }
    else {
        console.log("there is no name");
    }
}
greeting(22, "yasin");
//# sourceMappingURL=ders7.js.map