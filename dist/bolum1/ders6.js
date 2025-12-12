"use strict";
var Renk;
(function (Renk) {
    Renk[Renk["Kirmizi"] = 0] = "Kirmizi";
    Renk[Renk["Yesil"] = 1] = "Yesil";
    Renk[Renk["Mavi"] = 2] = "Mavi";
})(Renk || (Renk = {}));
var kullanicilar;
(function (kullanicilar) {
    kullanicilar["Admin"] = "ADMIN";
    kullanicilar["Kullanici"] = "KULLANICI";
    kullanicilar["Sat\u0131c\u0131"] = "SATICI";
})(kullanicilar || (kullanicilar = {}));
var Hatakodlari;
(function (Hatakodlari) {
    Hatakodlari[Hatakodlari["NotFound"] = 404] = "NotFound";
    Hatakodlari[Hatakodlari["ServerError"] = 500] = "ServerError";
    Hatakodlari[Hatakodlari["BadRequest"] = 400] = "BadRequest";
})(Hatakodlari || (Hatakodlari = {}));
console.log(Hatakodlari.NotFound); //404
console.log(kullanicilar.Admin); //ADMIN
console.log(Renk.Mavi); //2
//# sourceMappingURL=ders6.js.map