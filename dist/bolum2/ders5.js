"use strict";
function myCustomF() {
    throw new Error('Hata Oluştu');
}
function myCustomF2(age) {
    if (age > 15) {
        myCustomF();
    }
}
//# sourceMappingURL=ders5.js.map