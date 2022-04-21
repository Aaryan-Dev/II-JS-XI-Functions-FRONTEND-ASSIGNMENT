
// Problem-3
// Write a function isOdd which returns a boolean value based on the number is odd or not
// Use this function to print the odd numbers from 0 to a given limit(included)

function isOdd(num) {
    if (num % 2 !== 0) {
      console.log("True");
    } else {
      console.log("False");
    }
  }
  
  isOdd(9);
  
  function print(numb) {
    count = 0;
   
      for(i=0; i<=numb; i++){
            if(i%2 !== 0){
                 console.log(i);
            }
          }   
      }
  
      print(20);
  