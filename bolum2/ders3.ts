const myStringFunction = (ad:string) =>{
        return ad.toLocaleLowerCase()
}


//let lowecaseName:number= myStringFunction("AD")
//  burada gördüğün gibi hata mesajı olarak string bir değer döndüren fonksiyona yani burada java daki gibi bir tip koymasan bile dil kendi dil çıkarmını yapabiliyor 
let lowercaseName:string = myStringFunction("AD")
const MynumberFunction=(_ad:number):number=>{
    return 5
}
function normalFunction(_ad:string): string{
    return "Merhaba Murat Güven Kaya"
}
function arrayFunction():Array<String>{
    return ["a","b"]
}
enum color{
    Red=1
}
function enumFunciton():color{
    return color.Red
}