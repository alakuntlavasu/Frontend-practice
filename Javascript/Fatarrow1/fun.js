/* function add(a,b){
  console.log(a+b)
}
 add(10,20) */

 // normal function
  function add(a,b){
    return a+b
  }
  console.log(add(100,200))

  // fatarrow function
//()=>{}   normal fatarrow 
// type1
 let add1=(a,b)=>{
 console.log(a+b)
 }
 add1(100,200)
 //type2   with return statement
 let add2=(a,b)=>{
    return a+b
 }
 console.log(add2(100,200))
 //type3  implicit return
 let add3=(a,b)=>a+b
 console.log(add3(100,200))
  