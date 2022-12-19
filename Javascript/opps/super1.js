class A{
    m1(){
    console.log('class -A:m1()');
    }
}
class B extends A{
    constructor(a,b){
        super()
    }
    m1(){
        console.log('good boy');
    }
    m2(){
        console.log('good morning');
    }

}
let b = new B(34,56)
b.m1()
b.m2()