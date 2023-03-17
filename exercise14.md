## Que:1 Create an array called fruits that contains the following elements: "apple", "banana", "orange". Now check if "orange" is in the fruits array.

### Ans
 ```
 let fruits = ["apple", "banana", "orange"];
let checkFruits = fruits.includes("bananaa");
if(checkFruits){
    console.log(true)
}else{
    console.log(false)
}
```
## Que:2 Given an array of numbers, write a function that returns the sum of all the even numbers in the array.

### And
```
function sumOfEvenNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sum += arr[i];
      }
    }
  
    return sum;
  }
const arr = [1, 2, 3, 4, 5, 6];
const sum = sumOfEvenNumbers(arr);
console.log(sum);

```

## Que:3 Given two arrays of numbers, write a function that returns a new array that contains only the unique elements from both arrays.

### And
```
function uniqueArray(arr1, arr2) {
    const combinedArr = arr1.concat(arr2);
    const uniqueArr = [];
    for (let i = 0; i < combinedArr.length; i++) {
      if (!uniqueArr.includes(combinedArr[i])) {
        uniqueArr.push(combinedArr[i]);
      }
    }
    return uniqueArr;
  }

const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4, 5];
const uniqueArr = uniqueArray(arr1, arr2);
console.log(uniqueArr);
```

## Que:4 Given an array of strings, write a function that returns the longest string in the array.

### Ans
```
let array = ["apple", "banana", "mango"]
function longestString(arr){
let longest_string = ''
    for(let i=0; i < arr.length; i++){
        if(arr[i].length > longest_string.length){
            longest_string = arr[i]
        }
    }
    return longest_string
}
console.log(longestString(array));
```

## Que:5 Write a function that takes an array of numbers and returns the largest number in the array.

### Ans
```
let array = [2,3,4,51,6,7,8];
function largestNumber(err){
    let largest_number = 0;
    for(let i=0; i<err.length; i++){
        if(err[i] > largest_number){
            largest_number = err[i]
        }
    }
    return largest_number
}
console.log(largestNumber(array))
```

## Que:6 Write a function that takes an array of numbers and returns a new array that only contains the even numbers from the original array.

### Ans
```
let array = [2,3,4,5,6,7,8];
function evenNumbers(arr){
    let newArray = []
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 === 0){
            newArray.push(arr[i])
        }
    }
    return newArray
}
let newArray = evenNumbers(array)
console.log(newArray)
```
## Que:7 Write a function that takes an array of strings and returns a new array that only contains strings with more than 5 characters.

### Ans 
```
let array = ["a", "ab", "abc","abcd","abcde","abcdef","abcdefg","abcdefgh"]
function longestString(arr){
let newArray = []
    for(let i=0; i < arr.length; i++){
        if(arr[i].length > 5){
            newArray.push(arr[i]);
        }
    }
    return newArray
}
console.log(longestString(array));
```
## Que:8 Write a function that takes two arrays of numbers and returns a new array that contains the intersection of the two arrays (i.e. only the numbers that appear in both arrays).

### Ans
```
let array1 = [1,7,2,3,4,5];
let array2 = [1,2,3,4,5,6,7,8];
function intersection(arr){
    let intersectionArray = [];
    for(let i=0; i<arr.length; i++){
        if(array1.includes(arr[i])){
            intersectionArray.push(arr[i])
        }
    }
    return intersectionArray
}
console.log(intersection(array2));
```

## Que:9 Write a function that takes an array of numbers and returns a new array where each element is the square of the original element

## Ans
```
let array = [2,3,4,5,6,7,8,9];
function square(arr){
    let square = [];
    for(let i=0; i<arr.length; i++){
        square.push(arr[i]*arr[i])
    }
    return square

}
let squareArray = square(array)
console.log(squareArray);
```
## Que:10 Write a function that takes an array of numbers and returns the average of all the numbers in the array.

### ans
```

```

## Que:11 Write a function that takes an array of numbers and returns a new array that only contains numbers that are greater than 5. Use filter function

### Ans
```
let array = [2,4,5,6,7,8,9];
let newArray = [];
array.filter(i=>{
    if(i>5){
        newArray.push(i);
    }
})
console.log(newArray);
```

## Que:12 Write a function that takes an array of numbers and returns a new array where each element is the original element plus 1. use map function

### Ans
```
let array = [2,4,5,6,7,8,9];
let newArray = [];
array.map(i=>{
        newArray.push(i+1);
})
console.log(newArray);
```
## Que:13 Write a function that takes an array of numbers and returns a new array that contains only the unique numbers using reduce.

### Ans
```
function getUniqueNumbers(numbers) {
    return numbers.reduce((unique, number) => {
      if (!unique.includes(number)) {
        unique.push(number);
      }
      return unique;
    }, []);
  }
const numbers = [1, 2, 2, 3, 3, 4, 5, 5];
const uniqueNumbers = getUniqueNumbers(numbers);
console.log(uniqueNumbers);
```

## Que:14 Write a function that takes an array of strings and returns the total number of characters in all the strings using reduce.

### Ans
```
function TotalNumberChar(strings) {
    return strings.reduce((total, string) =>
     total + string.length, 0)
  }
  const strings = ['hello', 'world', 'foo', 'bar'];
const totalNumberOfCharacters = TotalNumberChar(strings);
console.log(totalNumberOfCharacters);
```
## Que:15 Write a function that takes an array of strings and sorts them by their length in ascending order.

### Ans
```
function sortByLength(strings) {
    return strings.sort((a, b) => a.length - b.length);
  }
const strings = ['cat', 'apple', 'dog', 'banana', 'elephant'];
const sortedStrings = sortByLength(strings);
console.log(sortedStrings); 
```

## Que:16 Write a function that takes an array of numbers and returns the second highest number.

### Ans 
```
function getSecondHighestNumber(numbers) {
    const sortedNumbers = numbers.sort((a, b) => b - a);
    return sortedNumbers[1];
  }
  const numbers = [1, 5, 3, 7, 2, 8, 4];
const secondHighestNumber = getSecondHighestNumber(numbers);
console.log(secondHighestNumber);
```
## Que: 17 Write a function that takes an array of numbers and returns a new array with all the unique numbers.

### ans
```
const numbers = [1, 5, 3,3, 7, 2, 8, 4];
let b = new Set(numbers);
console.log([...b])
```

## Que:19 Write a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order.

### Ans 
```
function ascending(array){
   return array.sort((a, b) => a - b);
}
let array = [2,3,4,5,6,7];
console.log(ascending(array))
```

## Que:20 Write a function that takes an array of strings and flattens each string into an array of characters, then flattens the result into a single array.

### Ans 
```
let arr = ['hello', 'world'];
let newString = ''
arr.forEach(i=> {
    newString = newString + i
})
console.log(newString.split(''))
```
