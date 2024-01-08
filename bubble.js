//less efficient
function bubbleSort1(arr) {
  for (let i = 0; i < arr.length; i++) {
    //subtract end of array each time, decrementing inner loops
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;
    // Subtract end of array each time, decrementing inner loops
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    // Break when there's no more swapping, will be faster with partially sorted data
    if (!swapped) break;
  }
  return arr;
}

module.exports = bubbleSort;
