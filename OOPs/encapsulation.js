// class encap{
//     #pin=123
//     get getpin(){
//         return this.#pin
//     }
//     set resetpin(newpin)
//     {
//     this.#pin=newpin
//     }
// }

// let ref=new encap()
// console.log(ref.getpin);
// ref.resetpinsetpin=456
// console.log(ref.getpin);



class Person{
    #name;
    #age;
    constructor(name, age){
        this.#name=name;
        this.#age=age;
    }
    get getname(){
        return this.#name
    }
    get getage(){
        return this.#age
    }
    set setname(newname)
        {
            this.#name=newname
        }
    set setage(newage){
        this.#age=newage

    }
}
const customer=new Person("kokila",14)
//console.log(customer.getname);
//console.log(customer.getage);
customer.setname="savitha"
customer.setage=35
console.log(customer.getname);
console.log(customer.getage);