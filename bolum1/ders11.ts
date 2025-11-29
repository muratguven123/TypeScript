type Kullanici="admin" | "kullanici" | "satici";

var adminuser:Kullanici="admin";
var normaluser:Kullanici="kullanici";
var selleruser:Kullanici="satici";

console.log(adminuser) //admin
console.log(normaluser) //kullanici
console.log(selleruser) //satici

type Mytype=number|string|boolean;
var customTypeUserId:Mytype=1;
enum Levels{
    baslangic=1,
    orta=2,
    son=3
}
type MymixType=Levels | Kullanici|"superadmin";
var MymixType:MymixType="superadmin";
var MymixType2:MymixType=Levels.baslangic;

type Userobj={
    id:number|string,
    ad:string,
    yas?:number, //opsiyonel
    rol:Kullanici
}
