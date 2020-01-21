// function binarySearch(n, m){
//     let start = 0;
//     let end = n.length-1
//     while(start <= end){
      
//     }
//   }
  
//   function shiftedArray(arr, target){
//     //find the rotation point
//     //walkthrough the array, check each value and its next value
//     //with this we will have two sorted halves, we can run two separate binary searches on each half.
//     //O(log n) 
//     //find the rotation point
//       //can we perform this step faster than O(n)
//       //can we do this in a O(log n)
//       //we can do this in O(log n)
//     //run two separate binary searches on each half
  
//     let newArr = []; 
//     for(let i = 0; i < arr.length; i++){
//       if(arr[i] > arr[i+1]){
//         newArr = arr.splice(arr.indexOf(arr[i+1]))
//       }    
//     }
//     if(target > arr[0]){
//         console.log("larger")
//         let start = 0; 
//         let end = arr.length-1
//         let mid = Math.floor((start + end)/2);

//     }
//     if(target < newArr[newArr.length - 1]){
//         console.log("smaller")
//         let start = 0; 
//         let end = newArr.length-1
//         let mid = Math.floor((start + end)/2);

    
//     }
//   }
  
// //   shiftedArray([5,6,7,8,1,2,3,4], 3)
// //   shiftedArray([5,6,7,8,2,3,4], 8)
// //   shiftedArray([5,6,1,2,3,4], 1)



// //Stacks and Queues
// //Stacks - Last in first out
// //Queue - First in First out

// //Sorting a Stack
// class Stack {
//     constructor() {
//       this.storage = [];
//     }
  
//     push(item) {
//       this.storage.push(item);
//     }
  
//     pop() {
//       return this.storage.pop();
//     }
  
//     peek() {
//       return this.storage[this.storage.length-1];
//     }
  
//     isEmpty() {
//       return this.storage.length === 0;
//     }
  
//     printContents() {
//       this.storage.forEach(elem => console.log(elem));
//     }
//   }

//   const s = new Stack();
// s.push(4);
// s.push(10);
// s.push(8);
// s.push(5);
// s.push(1);
// s.push(6);


// function sortStack(s){
//     //
// }
// const sortedStack = sortStack(s); // sortedStack is also a Stack instance

// sortedStack.printContents(); 


//Frequency Queries

function countingLegs(x,y,z){
    //x is going to be chickens
    //y is going to be cows
    //z is going to be pigs
    //x will be the only one multiplied by 2
    //y and z will be multipled by 4 
    let chicken = x * 2; 
    let cows = y * 4; 
    let pigs = z * 4; 
    console.log(chicken + cows + pigs)
    return chicken + cows + pigs
}
countingLegs(2,3,5); 


function lastElement(arr){
    console.log(arr[arr.length-1])
    console.log(arr.pop())
}
lastElement([1,2,3,4]) 