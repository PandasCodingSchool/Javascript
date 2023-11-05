// Array: collection of values/data .
let arr = [1, 2, 4, 5, "pankaj", { name: "xyz" }];
console.log(arr[0]);

// Methods of arrays
// 1. push()
arr.push(22); // new value at the last
console.log(arr);
// 2. pop()
arr.pop(); // remove last element of array
// 3. concat()
let newArr = arr.concat([22, 435, 56]); //return new array by joining two arrays
// 4. join()
const newArr2 = arr.join("/"); // It joins the elements of an array as a string.
// 5. forEach() // it iterates on every element of an array;\
arr.forEach((item) => {
  console.log(item);
});
// 6 . map()
const newArr3 = arr.map((ele) => {
  console.log(ele);
  return ele * 2;
});
