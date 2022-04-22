

let arr = ["FDG","RERG","THH","DFG","DFG"];
arrupper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
arrlower = "abcdefghijklmnopqrstuvwxyz";

tag = [];
for(i=0; i<arr.length; i++){
    x= arr[i];
    let bag = ""
    for(j=0; j<x.length; j++){

        for(k=0; k<arrupper.length; k++){
        if(x[j]===arrupper[k]){
             bag = bag + arrlower[k];
            }
        }
    }
    tag.push(bag);
    
}
console.log(tag);
