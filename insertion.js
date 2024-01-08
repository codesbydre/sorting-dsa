function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    //current element to be compared
    let currentVal = arr[i];
    //iterate through sorted portion of array
    let j;
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      //shift larger element to right
      arr[j + 1] = arr[j];
    }
    //insert current element into correct position
    arr[j + 1] = currentVal;
  }
  return arr;
}

module.exports = insertionSort;
