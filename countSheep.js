// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// My Solution
function countSheeps(arrayOfSheep) {
 let target = true;
 let counter = 0;
  for (sheep of arrayOfSheep){
    if(sheep === target){
       counter++;
    }
  }
  return counter;
}