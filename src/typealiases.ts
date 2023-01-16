type user={
    readonly id:string,
    first:string,
    last:string,
    age:number,
    isActive?:boolean
}


let myUser:user={
    id:"1234",
    first:"sannidhi",
    last:"hegde",
    age:30
}

//myUser.id="23"//cannot assign beacuse its readonly

//Combining types
type username={
    name:string
}
type birthdate={
    date:string
}
//&= used to combine 
type userdetails=username & birthdate & {
    age:number
}
//able to access all the properties
let users:userdetails={
    name:"abcd",
    date:"01-01-2001",
    age:30
}

console.log(users.name,+" "+users.date+" "+users.age)



