// Problem-2
// Write code to find the absolute difference of two numbers
function sub(a, c){

    return a - c;
}

function mod(x){
     if(x<0){
       return -x;
     }else{
         return x;
     }
    }

let ans = sub(1, 8);
let ansmod = mod(ans);

console.log(ansmod);