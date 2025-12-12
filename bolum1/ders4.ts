var arrays:string[]=["murat","yasin","ali"]

var numbers:number[]=[1,2,3,4,5]

var karisik:(number | string | boolean)[]=[1,"murat",true]


var array2:Array<string>=["ahmet","mehmet","ayse"]

var array3:Array<number>=[10,20,30,40]

array3.map(sayi=>{
    return sayi*2
})

var matris:number[][]=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(matris[1]?.[2]) //6