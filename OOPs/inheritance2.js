class car{
    constructor(brand)
    {
        this.carname=brand;
    }
    present()
    {
        return `i have a  ${this.carname}`
    }
}

let mycar=new car("Wagon")
 console.log(mycar.present());