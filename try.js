// // function applyOperation(operate, num1, num2){
// //     return operate(num1, num2);
// // }

// // function add(a, b) {
// //   return a + b;
// // }

// // function multiply(a, b) {
// //   return a * b;
// }

// // // Penggunaan
// // console.log(applyOperation(add, 5, 3)); // Output: 8
// // console.log(applyOperation(multiply, 5, 3)); // Output: 15

// function filter(data, predicate) {
//     return data.filter(predicate);
// }

// const numbers = [1, 2, 3, 4, 5];

// function isEven(num) {
//   return num % 2 === 0;
// }

// // Penggunaan
// console.log(filter(numbers, isEven)); // Output: [2, 4]
// function map(arr, operate){
//     let result = [];
//     for (item of arr) {
//         result.push(operate(item));
//     }
//     return result;
// }

// const numbers = [1, 2, 3, 4];

// function double(num) {
//   return num * 2;
// }

// // Penggunaan
// console.log(map(numbers, double)); // Output: [2, 4, 6, 8]
function compose(fn1, fn2) {
    
}

function addOne(x) {
    return x + 1;
  }
  
  function square(x) {
    return x * x;
  }
  
  // Penggunaan
  const addOneAndSquare = compose(square, addOne);
  console.log(addOneAndSquare(2)); // Output: 9
  