// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!

// My solution

function betterThanAverage(classPoints, yourPoints) {
  let average = classPoints.reduce((a , c) => a + c, 0) / classPoints.length;
  if (yourPoints > average){
    return true;
  }else {
    return false;
  }
}