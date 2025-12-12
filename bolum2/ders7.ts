function greeting(_age:number,name?:string){
    if(name){
            name?.toLocaleLowerCase()
            console.log("Hello"+name)
    }else{
        console.log("there is no name")
    }

}
greeting(22,"yasin")