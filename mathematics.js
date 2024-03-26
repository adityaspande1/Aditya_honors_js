function add(a,b){
    return a+b 
}

function sub(a,b){
    return a-b 
}

function multiply(a,b){
    return a*b 
}

function div(a,b){
    if(b==0){
        throw new Error("Divisor cannot be 0")
    }
    return a/b 
}
module.export={add,sub,multiply,div};
