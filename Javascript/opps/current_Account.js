const Account =require('./Account')
class Current_Account extends Account{
    constructor(id,name,amount){
        super(id,name,"Gn")
        this.amount=amount
    }
}
let c1=new Current_Account(102,"vasu",6000)
console.log(c1);
