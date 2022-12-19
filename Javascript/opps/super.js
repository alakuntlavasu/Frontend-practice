class Account{
    constructor(id,name,ammount, msg){
        this.acc_id=id
        this.acc_name=name
        this.ammount=ammount
        this.msg=msg
    }
}
class saving_Account extends Account{
    constructor(id,name,ammount,msg,place){
        super(id,name,ammount,msg)
        this.place=place

    }
        
    }
    class open_Account extends Account{
        constructor(id,name,amount,msg){
            super(id,name,amount)
            this.msg=msg
        }
        
        
    }
let a1=new saving_Account(101,'vasu',1000,'hello','mpl')
console.log(a1);
let a2=new open_Account(102,'naveen',45000,'gm')
console.log(a2);