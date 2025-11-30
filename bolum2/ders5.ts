function myCustomF():never{  // hata durumlarında never kullanırız
    throw new Error('Hata Oluştu') 
}
function myCustomF2(age:number):void{
    if(age>15){
        myCustomF()
    }
}