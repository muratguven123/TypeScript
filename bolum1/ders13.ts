const objem={
    id:1,
    ad:"murat",
    rol:"admin",
    function():void{},
    adres:Array<{
        sehir:string,
        ilce:string,
        no:number
    }>,
}
const xs = objem
const data :{
    id:number|string,
    levels:Levels,
    name?:String,//burada name alanı opsiyonel yaptık yani backendten veri gelmeyebilir
    status:"x"|"y"

}={
    id:1,
    levels:Levels.son,
    name:"deneme",
    status:"x"
}
