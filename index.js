function hasTargetSum(array, target){
//create an object to keep track of numbers we've already seen

const seenNumbers = {};
   //iterate through each number in the array
   for (const number of array){
    //n steps
    const compl = target - number;
    if (complement in seenNumbers) return true

    seenNumbers[number]= true;

 
}
return false;
}



//function hasTargetSum(array, target) {
  // Write your algorithm here
  //iterate through each number in the array

  //
    // for the current number, get a complement that will add to the target (comp = target - num)
    //const compl = target - array[i]
    //iterate again 
    //for (let j = i+1; j< array.length; j++){
      // check if any number is our complement, if that is true return true
      //if (array[j] === complement) return true;
    //}
  //}
  //f not true, return false


//0(n) runtime

function findSock(array){
  for (const item of array){
    if (item === "sock") return "sock";
  }
}
//0(1) runtime
function findSock(object){
  if (object.sock) return "sock";
}
/* 
  Write the Big O time complexity of your function here
  Runtime: O(n^2)
  Space: O(n)
*/

/* 
hasTargetSum([1, 2, 3, 4], 6)
seenNumbers = {
  1: true,
  2: true,
  3: true,
}
create an object to keep track of numbers we've already seen
  Add your pseudocode here
 Iterate through the array for the current num to find a complement that adds to the target (comp = target-num).
  Iterate through the rest of the array, checking to see whether any key on our object is the complement; if so, return true; otherwise, add that number to the object.


  if I reach the end of the array, return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("");
  // Negative numbers?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");
  // Multiple pairs?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");
  // Single numbers?
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}


module.exports = hasTargetSum;
