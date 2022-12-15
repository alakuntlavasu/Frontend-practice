class Account{
    min_Bal=500;
    Open_Account(){
      console.log("open Account succesfull")
    }
    get_st(){
      console.log("displaying st")
    }
    get_bal(){
       console.log("displaying Bla")
    }
    withdraw_Amount(){
       console.log("no cash come to tomorrow")
    }
    close_Account(){
      console.log("not possible pay Gst!")
    }
}
let a1 =new Account();
console.log(a1)
console.log(a1.min_Bal)
a1.Open_Account()
a1.get_st()
a1.get_bal()
a1.withdraw_Amount()
a1.close_Account()


