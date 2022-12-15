class Account{
    min_Bal=500;
    acc_Bal=0;
    acc_name=''
    Deposit_Amount(Amount){
        this.acc_Bal=this.min_Bal+Amount
    
    }
    get_Bal(){
        return this.acc_Bal-this.min_Bal
    }
    displayname(name){
 this.acc_name=name
    }
}
let a1= new Account()
let a2= new Account()
console.log(a1)
console.log(a2)
a1.displayname('vasu')
a2.displayname('hemanth')
a1.Deposit_Amount(4500)
a2.Deposit_Amount(6540)
a1.get_Bal()
a2.get_Bal()
console.log(a1)
console.log(a2)


