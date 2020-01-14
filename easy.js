function binarySearch(n, m){
    let start = 0;
    let end = n.length-1
    while(start <= end){
      
    }
  }
  
  function shiftedArray(arr, target){
    //find the rotation point
    //walkthrough the array, check each value and its next value
    //with this we will have two sorted halves, we can run two separate binary searches on each half.
    //O(log n) 
    //find the rotation point
      //can we perform this step faster than O(n)
      //can we do this in a O(log n)
      //we can do this in O(log n)
    //run two separate binary searches on each half
  
    let newArr = []; 
    for(let i = 0; i < arr.length; i++){
      if(arr[i] > arr[i+1]){
        newArr = arr.splice(arr.indexOf(arr[i+1]))
      }    
    }
    console.log(arr, newArr)
  }
  
  shiftedArray([5,6,7,8,1,2,3,4], 3)