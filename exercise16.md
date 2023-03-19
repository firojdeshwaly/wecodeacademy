## Que:1 Write a JavaScript program to check whether a string "Code" presents at 5th (index 4) position in a given string, if "Code" presents in the string return the string without "Code" otherwise return the original one.
### Ans:
```
function checkAndRemoveCode(str) {
    if (str.substring(4, 8) === "Code") {
      return str.substring(0, 4) + str.substring(8);
    } else {
      return str;
    }
  }
  console.log(checkAndRemoveCode("HeloCodeWorld"));
  console.log(checkAndRemoveCode("CodeIsCool"));
```

## Que: Write a JavaScript program to capitalize the first letter of each word of a given string.
### Ans:
```
let string = 'hello word';
let convertToSplit = string.split(' ');
console.log(convertToSplit);
let capitalizeString = '';
convertToSplit.forEach(str=> {
    capitalizeString = capitalizeString + str.charAt(0).toUpperCase() + str.slice(1) + ' ';
})
console.log(capitalizeString)
```
## Que:3 Write a JavaScript program to check whether all the digits in a given number are the same or not.
### Ans:
```
function strNum(num){
    let strNum = num.toString();
    for(let i=0; i<strNum.length; i++){
        if(strNum[i]!==strNum[0]){
            return false
        }
    }
    return true
}
console.log(strNum(111211));
console.log(strNum(11111));
```
## Que:4 Write a JavaScript function that reverse a number.
### Ans:
```
function reverseNumber(num){
    let connvertString = num.toString();
    let connvertSplit = connvertString.split('');
    return connvertSplit.reverse();
}
console.log(reverseNumber(12345));
```

## Que:5 Write a JavaScript function to extract unique characters from a string.
### Ans:
```
function characters(num){
    let array = [];
    let convertArray = num.split('');
    for(let i=0;i<convertArray.length;i++){
        if(!array.includes(num[i])){
            array.push(num[i]);
        }
    }
  return array.join('');
}
let uniqueCharacters =characters('thequickbrownfoxjumpsoverthelazydog')
console.log(uniqueCharacters);
```
## Que:6 Write a JavaScript function to chop a string into chunks of a given length. Test Data :
### Ans:
```
function string_chop(str, len) {
    if (len == null || len < 1) {
      return [str];
    }
    let result = [];
    for (let i = 0;i < str.length;i += len) {
      result.push(str.slice(i, i + len));
    }
    return result;
  }
  console.log(string_chop('w3resource'));
  console.log(string_chop('w3resource', 2)); 
```

## Que:7 Write a JavaScript function to find a word within a string. Test Data :
### Ans:
```
function search_word(str, word) {
    let count = 0;
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
      if (words[i] === word) {
        count++;
      }
    }
    return "'" + word + "' was found " + count + " times.";
  }
  console.log(search_word('The quick brown fox', 'fox'));
  console.log(search_word('aa, bb, cc, dd, aa', 'aa')); 
```

## Que:8 Create an array of numbers. Now filter out all the numbers from the array where number is in between 30-50. After filtering the numbers, add 20 to each number and finally print the sum of all numbers using reduce function.
### Ans:
```
let numbers = [10, 20, 30, 40, 50, 60, 70];
let filteredNumbers = numbers.filter(function(number) {
  return number < 30 || number > 50;
});

let transformedNumbers = filteredNumbers.map(function(number) {
  return number + 20;
});

let sum = transformedNumbers.reduce(function(acc, number) {
    console.log(acc, number)
  return acc + number;
}, 0);

console.log(sum);
```

## Que:9 Convert below array
```
[[1,2], [3,4], [5,6], [7,8], [9,10]]
to
[3,7,11,15,19]
```
### Ans:
```
let array = [[1,2], [3,4], [5,6], [7,8], [9,10]];
let newArray = []
array.map(i=> {
    let count = 0;
    i.map(ii=> {
        count = count + ii
    })
    newArray.push(count);
    console.log()

})
console.log(newArray);
```

## Que:10
### Ans:
```for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = i; j <= 5; j++) {
      row += j + ' ';
    }
    console.log(' '.repeat(i - 1) + row.trim());
  }
  ```