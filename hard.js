//Stems and Leaves

function stemPlot(arr){
    //seperate the numbers into two parts
    //stem and leaf, stem equals everything before the leaf
    //the leaf is the last number in the value. 
    //knocking off the last 
    //variable that holds the stem 
    //variable that holds the leaf
    let stem; 
    let leaf; 
    let newArr =[];
    let newerArr = []; 
    let newestArr = [];  
    let zeroArr = [];

    arr.sort((a, b) => a - b)
    for(let i = 0; i < arr.length; i++){
       newArr = arr[i].toString().split('');
       newerArr.push(newArr)
       console.log(newerArr)
       if(newerArr[i].length === 1){
           newestArr.push(newerArr[i])
           console.log(newerArr); 
           let merged = newerArr.concat.apply([],newerArr).join(' ')
           console.log(merged)
           zeroArr.push("0 | " + merged); 
           console.log(zeroArr)
       }
       if(newArr.length > 1){
           leaf = newArr.splice(-1); 
           stem = newArr.splice(0).join(''); 
           console.log(leaf)
           console.log(stem)
           zeroArr.push(stem.concat(" | " + leaf))
       }

    }
    console.log(zeroArr)
    return zeroArr
}
// stemPlot([111, 11, 1])
// stemPlot([111, 3, 2])
stemPlot([4, 8, 6,75])
// stemPlot([22, 22, 38, 22, 19])


function sevenBoom(arr){
    //takes in an array of numbers
    console.log(arr); 
    //loop through the numbers and find the length of each
    for(let i = 0; i < arr.length; i++){ 
        let numStr = arr[i].toString(); 
        console.log(arr[i])
           if(numStr.indexOf('7') > -1){
               console.log(numStr,"Boom"); 
               return "Boom"
           }
    }

    return "there is no 7"
    //if it is one digit then compare to 7
    //if not then we will need to split the number and compare
    // the digitis within to number to 7 and see if it appears
    //if 7 is then return string "Boom", if not "there is no 7"
 }
// sevenBoom([1,2,3,4,7]); 
console.log(sevenBoom([1,2,43,8,87]))
console.log(sevenBoom([1,2,43,8,88]))