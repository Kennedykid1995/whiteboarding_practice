//bubble sort

function bubbleSort(arr) {
    console.log(arr);
}
bubbleSort([8, 4, 9, 3, 7])
bubbleSort([8, 4, 1])


function bubbleSort(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) { //have one loop decreasing
      noSwaps = true;
      for (let j = 0; j < i - 1; j++) {//have another increasing
        if (arr[j] > arr[j + 1]) {
          console.log(arr[j], arr[j+1])
          //swap
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          noSwaps = false;
        }
      }
      if (noSwaps) break;
    }
    console.log(arr)
    return arr;
  }
  bubbleSort([2, 1, 4, 5, 3, 6]);

  function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let lowest = i; //the index.
      console.log(lowest)
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[lowest]) {
          lowest = j;
          console.log(lowest)
        }
      }
      if (i !== lowest) {
        let temp = arr[i];
        console.log(temp)
        arr[i] = arr[lowest];
        arr[lowest] = temp;
      }
    }
    console.log(arr)
    return arr;
  }
  selectionSort([10, 2, 3, 1, 67, 3]);


  //two sum

  function twoSum(arr, target){
    console.log(arr, target); 
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i] + arr[i+1])
        let sum = arr[i] + arr[i+1]
        if(sum === target){
            console.log(arr[i], arr[i+1])
            return 
        }
    }
  }
  twoSum([1,2,3,4], 5)


//remove element

function removeElement(arr, val){
    //loop through the arr
    let unwanted = []; 
    for(let i = 0; i < arr.length; i++){
    //compare each of the elements in the array with the val trying to be found
    console.log(arr[i])
    if(arr[i] === val){
          //on every occurence of the val remove the element
        let position = arr.indexOf(arr[i]);
        arr.splice(position, 1)
        console.log(arr); 
    }
    //after all of the elements that equal the val are removed return the length of arr
    }
    console.log(arr.length)
    return arr.length
}

removeElement([1,2,3,4], 3); 


//Valid Parentheses

function validParentheses(s){
    var bracketsDictionary = {
        '{': '}',
        '[': ']',
        '(': ')'
    };
    var stack = [];
  
    for (var i = 0; i < s.length; i++) {
        if (bracketsDictionary[s.charAt(i)]) {
            stack.push(bracketsDictionary[s.charAt(i)]);
        } else {
            if (stack.pop() !== s.charAt(i)) {
                return false;
            }
        }
    }
    if (stack.length !== 0) return false;
    return true;
}; 
console.log(validParentheses("[]"))
console.log(validParentheses("[)"))
console.log(validParentheses("()[]{}"))