let score:number|string = 33//score can be both number or string

score="abcd"
score=55
score="55"

// function getId(id:number|string){
//     id.toLowerCase()//doesnt exist on number
// }

//array with union

const data:(string|number)[]=["1",2,"3"]
console.log(data)