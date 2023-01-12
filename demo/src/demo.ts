//types

//number and string
let x:number=1234.87
console.log(x)

//console.log(x.toExponential())
//x="hello"
let user:string="abcd"
console.log(user)
console.log(user.replace("abcd","xyz"))

//boolean
let isEligible:boolean=true
isEligible=false
//isEligible=12
if(isEligible){
    console.log("yes")
}
else{
    console.log("no")
}

//any
let item:any
function getItems(){
    //return "pen"
    //return 1234
    return true
}
item=getItems()
console.log(item)

//array
let nums:number[]=[1,2,3]
let strs:string[]=["a","b","c"]
let items:[number,string]=[12,"a"]
//let prod:[number,string]=[12,"a","b"]





