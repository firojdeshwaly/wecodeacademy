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