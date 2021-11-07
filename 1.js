function chet(){
    let j=0;
    for(let i=0;i<arr.length;i++){
        if (arr[i]%2==0){
            j++;
        }
    }
    return j;
}
function nechet(){
    let j=0;
    for(let i=0;i<arr.length;i++){
        if (arr[i]%2==1){
            j++;
        }
    }
    return j;
}
function noll(){
    let j=0;
    for(let i=0;i<arr.length;i++){
        if (arr[i]==0){
            j++;
        }
    }
    return j;
}
let arr=[1,2,3,4,5,0];
console.log("четных = ",chet()," не четных =",nechet(),"нулей =",noll())