// Problem-6
// Given a string swap the case and print the output
// Sample Input - Test
// Sample Output - tEST
// NOTE: Use multiple functions to achieve the result, NOT one single code block



function alpha(char){

    let arrupper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let arrlower = "abcdefghijklmnopqstruvwxyz"

      
    bag = "";
    for(j=0; j<char.length; j++){
        
    for( i = 0; i<arrupper.length; i++){
          if(char[j]==arrupper[i]){
            bag = bag + arrlower[i]
          }
          else if (char[j]==arrlower[i]){
            bag = bag + arrupper[i]
          }
        }
    }
    console.log(bag);
}
    alpha("DeEyH");