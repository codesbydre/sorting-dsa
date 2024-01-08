function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    //assuming first element minimum
    let min = i;
    //test against elements after i to find the smallest
    for (let j = i + 1; j < arr.length; j++) {
      //update min if next element is lower
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    //if the min isnt the one we started with, swap
    if (i !== min) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}

module.exports = selectionSort;
