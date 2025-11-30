Math.max(1,2,3,4,5,6,7,8,9)


function sumNumbers(...numbers:Array<number>):number{
    return numbers.reduce((a,b)=>a+b,0)
}
function sumNumbers2(...numbers:number[]):number{
    return numbers.reduce((a,b)=>a+b,0)
}
sumNumbers(10)