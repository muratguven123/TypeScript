"use strict";
const myStringFunction = (ad) => {
    return ad.toLocaleLowerCase();
};
//let lowecaseName:number= myStringFunction("AD")
//  burada gördüğün gibi hata mesajı olarak string bir değer döndüren fonksiyona yani burada java daki gibi bir tip koymasan bile dil kendi dil çıkarmını yapabiliyor 
let lowercaseName = myStringFunction("AD");
const MynumberFunction = (_ad) => {
    return 5;
};
function normalFunction(_ad) {
    return "Merhaba Murat Güven Kaya";
}
function arrayFunction() {
    return ["a", "b"];
}
var color;
(function (color) {
    color[color["Red"] = 1] = "Red";
})(color || (color = {}));
function enumFunciton() {
    return color.Red;
}
//# sourceMappingURL=ders3.js.map