enum Renk {
    Kirmizi,
    Yesil,
    Mavi
}
enum kullanicilar {
    Admin = "ADMIN",
    Kullanici = "KULLANICI",
    Satıcı = "SATICI"
}
enum Hatakodlari {
    NotFound = 404,
    ServerError = 500,
    BadRequest = 400
}

console.log(Hatakodlari.NotFound) //404
console.log(kullanicilar.Admin) //ADMIN
console.log(Renk.Mavi) //2