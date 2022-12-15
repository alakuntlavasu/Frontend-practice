class A{
    m1(){
        console.log('classA_m1 method');
    }
    m2(){
        console.log('classA_m2 method');
    }
}
class B extends A{
    m3(){
        console.log('goo morning');
    }
}
let a1=new B()
a1.m1()
a1.m2()
