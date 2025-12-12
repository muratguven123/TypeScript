"use strict";
const mesajyolla = (msg, cb) => {
    console.log(msg);
    cb();
};
mesajyolla("Merhaba", () => {
    console.log("Callback çalıştı");
});
const mesajyolla2 = (msg, cb) => {
    console.log(msg);
    cb();
};
const mesajyolla3 = (msg, cb) => {
    console.log(msg);
    cb("merhaba");
};
//# sourceMappingURL=ders6.js.map