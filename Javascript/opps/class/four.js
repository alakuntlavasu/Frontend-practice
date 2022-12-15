class Account{
    acc_id;
    acc_name;
    acc_Bal=0;
     constructor(id,name,bal){
        this.acc_id=id,
        this.acc_name=name,
        this.acc_Bal=bal;
     }
}
let a1=new Account(76,'vasu',4500)
let a2=new Account(87,'varun',6500)
let a3=new Account(87,'varun',6500)
console.log(a1)
console.log(a2)
console.log(a3);