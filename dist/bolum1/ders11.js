"use strict";
var adminuser = "admin";
var normaluser = "kullanici";
var selleruser = "satici";
console.log(adminuser); //admin
console.log(normaluser); //kullanici
console.log(selleruser); //satici
var customTypeUserId = 1;
var Levels;
(function (Levels) {
    Levels[Levels["baslangic"] = 1] = "baslangic";
    Levels[Levels["orta"] = 2] = "orta";
    Levels[Levels["son"] = 3] = "son";
})(Levels || (Levels = {}));
var MymixType = "superadmin";
var MymixType2 = Levels.baslangic;
//# sourceMappingURL=ders11.js.map