// Problem-4
function array(arr){

    
    if(arr.length==0){
        console.log(0);
    }else{
    sum = 0;
for(i=0; i<arr.length; i++) {
      
     sum = sum + arr[i];     
    }
}
    console.log(sum/arr.length);
}  

array([56,43,4,67,98]);
