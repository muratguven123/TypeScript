type Kullanici = "admin" | "kullanici" | "satici";
declare var adminuser: Kullanici;
declare var normaluser: Kullanici;
declare var selleruser: Kullanici;
type Mytype = number | string | boolean;
declare var customTypeUserId: Mytype;
declare enum Levels {
    baslangic = 1,
    orta = 2,
    son = 3
}
type MymixType = Levels | Kullanici | "superadmin";
declare var MymixType: MymixType;
declare var MymixType2: MymixType;
type Userobj = {
    id: number | string;
    ad: string;
    yas?: number;
    rol: Kullanici;
};
//# sourceMappingURL=ders11.d.ts.map