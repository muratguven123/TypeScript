type Personel={
    id:number,
    ad:string,
    rol:string
}

type worker={
    ucret:number,
    calismaSaat:number,
    yas:number,
    departman?:string
}
type Employee=Personel & worker;

var personel1 :Employee={
    id:1,
    ad:"murat",
    rol:"admin",
    ucret:5000,
    calismaSaat:160,
    yas:30
}
