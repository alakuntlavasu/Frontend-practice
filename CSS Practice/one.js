/* function add(a, ...b){
   
    console.log(b)

}
add()
add(12,45)
add(34,56,70)
add(20,45,46,34) */

/* // ES6 syntax
for(let i = 4; i < 8; i++) {
    console.log(i); // 0,1,2,3,4
}
console.log(i); // undefined */


 // ES5 syntax
/* for(var i = 0; i < 5; i++) {
    console.log(i); // 0,1,2,3,4
}
console.log(i); // 5  */


function myFunction(a, b, ...args) {
    return args;
}

console.log(myFunction(1, 2, 3, 4, 5)); // 3,4,5
console.log(myFunction(-7, 5, 0, -2, 4.5, 1, 3)); // 0,-2,4.5,1,3