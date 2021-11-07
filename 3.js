function func(){
    return 4;
}
function sum(func){
    return func()+2;
}
console.log(sum(func));