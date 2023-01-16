// function sum(num1,num2){
    
//     return num1+num2
// }
// console.log(sum(5,2))

function sum(num:any):any{
    return num+2
}
console.log(sum("5"))

function addTwo(num1:number,num2:number){
    //num1.toUpperCase()
    return num1+num2

}
console.log(addTwo(3,6))

function getUpper(val:string){
    return val.toUpperCase()
}
//console.log(getUpper(4))

function greet(fn:(x:string)=>void){
    fn("hello world")
}
function printconsole(s:string){
    console.log(s)
}
greet(printconsole)

function printnum(num:number):string{
    return "hello"
    //return num
}
console.log(printnum(5))

const getVal=(s:string):string=>{
    return "hi"
}
console.log(getVal("ab"))

const fruits=["apple","orange","grapes",3]

fruits.map((fruit:string)=>{
    console.log(fruit)
    console.log(typeof(fruit))
})


