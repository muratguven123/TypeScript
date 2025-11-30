type callback=()=>void
type callbackwithParameters=(msg:string)=>void
const mesajyolla=(msg:string,cb:callback)=>{
    console.log(msg)
    cb()
}
mesajyolla("Merhaba",()=>{
    console.log("Callback çalıştı")
})
const mesajyolla2=(msg:string,cb:callback)=>{
    console.log(msg)
    cb()
}
const mesajyolla3=(msg:string,cb:callbackwithParameters)=>{
    console.log(msg)
    cb("merhaba")
}