let goTomovie=(success,failure)=>{
    let amount=200;
    if(amount <=700){
        success('go to movie')
    }
    else{
        failure('back to the house')
    }
}
goTomovie((masage)=>{
    console.log(masage)
}
,(err)=>{
    console.log(err);
})
