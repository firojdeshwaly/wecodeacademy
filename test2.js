// // //Q1:
// let array = [1,2,3];
// console.log(array[1]);

// // //Q2:
// let array2 = [1,2,3,4,5];
// console.log(array2.length);

// // //Q3:
// let array3 = [1,2,3,4];
// for(let i=0; i<array3.length; i++){
//     console.log(array3[i]);
// }

// //Q4:
// let array4 = [1,2,3,4,5,6];
// array3.forEach((i) => {
//     console.log(i);
// })

// //Q5:
// let array5 = [1,2,3];
// array5.push(4);
// console.log(array5)

// //Q6
// let array6 = [1,2,3,4];
// array6.splice(1,1)
// console.log(array6)

// //Q7
// let array7 = [1,2,3,4,5];
// array7.pop();
// console.log(array7)

// //Q8
// let array8 = [1,2,3];
// if(array8.includes(3)){
//     console.log(true)
// }else{
//     console.log(false)
// }

// //Q9:
// let array9 = [1,12,3,4];
// array9.sort(ascending);
// console.log(array9);
// function ascending(a,b){
//    return a-b;
// }

// //Q10:
// let array10 = [1,12,3,4];
// array9.sort(descending);
// console.log(array9);
// function descending(a,b){
//    return b-a;
// }


// //Q11
// let Array1 = [1,12,3,4];
// let Array2 = [11,22,32,44];
// let concatenateArray = Array1.concat(Array2);
// console.log(concatenateArray);

// //Q12
// let array12 = [1,12,3];
// let stringArray = array12.map(num => num.toString());
// console.log(stringArray); 

// //Q13
// let array13 = [1,12,3,4];
// array13.reverse();
// console.log(array13);

// //Q14
// let array14 = ["apple", "banana", "cherry", "date", "elderberry"];
// let index = array14.indexOf("banana");
// console.log(index);

// //Q15
// let array15 = [1,2,3,4,5,6];
// let sliceArray = array15.slice(0,3);
// console.log(sliceArray);

// //Q16
// let array16 = [1, 2, 3, 4, 5, 6];
// let doubledArray = array16.map(num => num * 2);
// console.log(doubledArray);

// //Q17
// let array17 = [10, 20, 30, 40];
// let i = 0;
// let sum = 0;
// while(i<array17.length){
//     sum = sum + array17[i];
//     i++
// }
// console.log(sum);

// //Q18
// let array18 = [10, 25, 31, 40];
// let evenNumber = array18.filter(even);
// function even(number){
//     return number % 2 ==0;
// }
// console.log(evenNumber);

// //Q19
// let array19 = ["date",10, 03, 2023,"toDay"];
// let joinConcatenate = array19.join("-");
// console.log(joinConcatenate);

// //Q20
// let array20 = ["apple", "banana", "cherry"];
// let array21 = ["date", "elderberry", "fig"];
// let newArray = array20.concat(array21);
// console.log(newArray);
 let a = [1,2,3,3];
 let b = new Set(a);
 console.log([...b])