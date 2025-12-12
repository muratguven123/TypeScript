function merhabaDers2(p:String){
    console.log(p)
}
const sayhelloTUser=(user:Number)=>{
    console.log("Hello"+user);
}
const logArray=(_userlist:Array<Number>)=>{}
const mixTypeFun=(_p1:string|FType)=>{}
type FType ={ad:string}

merhabaDers2("11")
sayhelloTUser(1)

//Eğer bir parametre de herhangi bir değer atfettmediğin zaman parametre değeri any olarak kabul edilecektir
//ancak bir değer atfettiğin zamanda fonksiyon için alabileceği yönden parametre sınırı getirebilir