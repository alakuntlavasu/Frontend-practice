class Employe {
    emp_id
    constructor(id, name, sal) {
        this.emp_id = id
        this.emp_name = name
    }
    get_Details() { }
}
let e1 = new Employe(102, 'vasu')
let e2 = new Employe(45, 'varun')
let e3 = new Employe(78, 'jaggu')
let e4 = new Employe()
let e5 = new Employe()

console.log(e1);
console.log(e2);
console.log(e3);
console.log(e4);
console.log(e5);