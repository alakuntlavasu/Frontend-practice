let A=[
    {id:1,name:'aaa'},
    {id:2,name:'sdsdd'},
    {id:3,name:'ssd'},
    {id:31,name:'ssss'}
]
let B=[
    {id:1,city:'bbbb'},
    {id:22,city:'bbbbb'},
    {id:31,city:'bhhhh'}
]
 let result=[]
 for(a of A){
    for( b of B){
        if(a.id!==b.id){
            result.push(a)
        }
    }
 }
 console.log(result);