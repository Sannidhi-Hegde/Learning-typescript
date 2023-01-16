class details {
    first: string
    last: string
    city:string="bangalore"//needs to be initialised if it is not in constructor
    constructor(first: string,last: string){
        this.first=first
        this.last=last
        this.city="chennai"
    }
}

const ab=new details("abcd","xyz")
//ab.city