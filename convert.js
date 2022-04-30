// 5
// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]



function alphabet(char){

let arrupper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let arrlower = "abcdefghijklmnopqstruvwxyz"

for( i = 0; i<arrupper.length; i++  ){
      if(arrupper[i]==char){
              console.log(arrlower[i]);
              break;
      }
}
}

alphabet("J");


function alpha(char){

    let arrupper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let arrlower = "abcdefghijklmnopqstruvwxyz"

         bag = ""
    for(j=0; j<char.length; j++){
        
    for( i = 0; i<arrupper.length; i++){
          if(char[j]==arrupper[i]){
                 bag = bag + arrlower[i];
          }
        }
    }
        console.log(bag);
}
    alpha("DFUH");


function  getArr (arr){

   

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
}
getArr( ["FDG","RERG","THH","DFG","DFG"]);
