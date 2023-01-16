//to name an object type


interface User{
    readonly id:number,
    first:string,
    last:string,
    email?:string,
    setUserid():string,
    getCoupon(couponname:string):number

}
//adding few more properties
interface User{    //this cannot be done using type aliases
    age:number
}
//inheritance
interface admin extends User{
    role:"admin"|"ta"
}

let person:admin={
    id:22,
    role:"admin",
    first:"john",
    last:"lawren",
    setUserid:()=>{
        return "id is set"
    },
    getCoupon:(name:"sannidhi")=>{
        return 10
    },
    age:30
}
//console.log(person.setUserid())