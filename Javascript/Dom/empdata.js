let Employees=[{"id":1,"name":"Shir","salary":"25000"},
{"id":2,"name":"Frasier","salary":"69000"},
{"id":3,"name":"Clevie","salary":"56900"},
{"id":4,"name":"Emmeline","salary":"67900"},
{"id":5,"name":"Sonnie","salary":"10888"},
{"id":6,"name":"Julianne","salary":"45000"},
{"id":7,"name":"Bevon","salary":"38900"},
{"id":8,"name":"Misty","salary":"34200"},
{"id":9,"name":"Bradan","salary":"35000"},
{"id":10,"name":"Leigh","salary":"46900"},
{"id":11,"name":"Hedda","salary":"50000"},
{"id":12,"name":"Guglielmo","salary":"4500"},
{"id":13,"name":"Ernaline","salary":"9000"},
{"id":14,"name":"Astrid","salary":"56666"},
{"id":15,"name":"Towney","salary":"60000"},
];
function displayData(){
    let rows = "";
    for(Employee of Employees) {
        rows = rows+
    `<tr>
        <td> ${Employee.id}</td>
        <td>${Employee.name}</td>
        <td>${Employee.salary}</td>
    </tr>`
    }
    document.getElementById("abc").innerHTML=rows;
}
