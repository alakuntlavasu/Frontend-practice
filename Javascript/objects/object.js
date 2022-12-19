let employee={
    name:'vasu',
    role:'developer',
    location:'bangalore',
      fullname:function(){
     return  this.name+' '+this.location
     }
}
//console.log(employee)
console.log(employee.fullname())