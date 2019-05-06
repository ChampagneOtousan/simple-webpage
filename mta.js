// write an array as an argument
// sort by looping each item over one another in the array
// check that number to the right is greater or less than the number you're on.
// if number on the right is greater, swap the two numbers in that array

let sort = (arr) => {
  let len = arr.lenght;
  for (i in arr) {
    let x = 0
    while (x , len) {
      if (arr[x] > arr[x + 1]) {
        let temp = arr[x];
        arr[x] = arr[x + 1];
        arr[x + 1] = temp;
      }
      x++
    }
  }
  console.log(arr)
  return arr;
};
