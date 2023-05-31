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
//  let a = [1,2,3,3];
//  let b = new Set(a);
//  console.log([...b])


// let map = new Map();
// //set function to add values
// map.set("js", 800);
// map.set("designing", 400);
// map.set("java", 700);
// map.set("nodejs", 500);
// //get function to get values based on key
// console.log(map.get("js"));
// console.log(map.get("nodejs"));
// console.log(map.get("python"));
// console.log(map);

// for (let value of map){
//     console.log(value[0],value[1])
// }

// let obj = {
//     name: "Wecode",
//     mobile: 4545345435,
//     pincode: 302012,
//   };
//   //Objec to Map
//   let map = new Map(Object.entries(obj));
//   console.log(map);

// let arr = [1,2,1,3,2,3,4,5,5,6,6];
// let map = new Map();
// for(let value of arr){
//     if(map.has(value)){

//     }else{
//         map.set(value,1)
//     }
// }
// console.log(map)



// let teams = [
//     {
//         "isDeleted": false,
//         "isSuspended": false,
//         "_id": "641013da0d87640163fb6af7",
//         "competitorId": "sr:competitor:142690",
//         "eventId": "641013a00d87640163fb6966",
//         "__v": 0,
//         "abbreviation": "AUS",
//         "competitorName": "Australia",
//         "country": "Australia",
//         "countryCode": "AUS",
//         "created": "2023-03-14T06:27:34.592Z",
//         "qualifier": "away",
//         "updated": "2023-03-15T09:19:06.431Z"
//     },
//     {
//         "isDeleted": false,
//         "isSuspended": false,
//         "_id": "641013da0d87640163fb6af9",
//         "competitorId": "sr:competitor:107203",
//         "eventId": "641013a00d87640163fb6966",
//         "__v": 0,
//         "abbreviation": "IND",
//         "competitorName": "India",
//         "country": "India",
//         "countryCode": "IND",
//         "created": "2023-03-14T06:27:34.592Z",
//         "qualifier": "home",
//         "updated": "2023-03-15T09:19:06.431Z"
//     }
// ];

// let players = [
//     {
//         "_id": "6412eb130d876401630b5298",
//         "competitorId": "sr:competitor:107203",
//         "playerId": "sr:player:692218",
//         "tournamentId": "sr:tournament:19504",
//         "__v": 0,
//         "country_code": "IND",
//         "created": "2023-03-16T10:10:27.399Z",
//         "date_of_birth": "1992-04-18",
//         "nationality": "India",
//         "playerName": "Rahul, KL",
//         "rosterPositionId": {
//             "_id": "63e9e96a224d081344dafda5",
//             "Name": "batsman"
//         },
//         "teamLocalId": {
//             "_id": "6410184c0d87640163fb8e98",
//             "abbreviation": "IND"
//         },
//         "type": "batsman",
//         "updated": "2023-03-16T10:10:27.399Z",
//         "key": 1
//     },
//     {
//         "_id": "6412eb480d876401630b56e2",
//         "competitorId": "sr:competitor:142690",
//         "playerId": "sr:player:648048",
//         "tournamentId": "sr:tournament:19504",
//         "__v": 0,
//         "country_code": "AUS",
//         "created": "2023-03-16T10:11:20.387Z",
//         "date_of_birth": "1991-10-20",
//         "nationality": "Australia",
//         "playerName": "Marsh, Mitchell",
//         "rosterPositionId": {
//             "_id": "63fee76ad4d19d1d64366331",
//             "Name": "all_rounder"
//         },
//         "teamLocalId": {
//             "_id": "6410184a0d87640163fb8e82",
//             "abbreviation": "AUS"
//         },
//         "type": "all_rounder",
//         "updated": "2023-03-16T10:11:20.387Z",
//         "key": 21
//     }
// ];

// let eventTeams = {};
// teams.forEach(team => {
//     if(eventTeams[team.eventId] == null) eventTeams[team.eventId] = [];
//     if(eventTeams[team.eventId].indexOf(team.abbreviation) == -1) eventTeams[team.eventId].push(team.abbreviation);

// })
// console.log(eventTeams)
// let oppopentData = {teams:{},events: {}};
// Object.keys(eventTeams).forEach(event => {
//     oppopentData['teams'][eventTeams[event][0]] = eventTeams[event][1];
//     oppopentData['teams'][eventTeams[event][1]] = eventTeams[event][0];

//     oppopentData['events'][eventTeams[event][0]] = event;
//     oppopentData['events'][eventTeams[event][1]] = event;
// })

// players.map(player => {
//     const myteam =  player.teamLocalId.abbreviation;
//     const opp = (oppopentData['teams'][myteam] != null) ? oppopentData['teams'][myteam] : "";
//     const eventId = (oppopentData['events'][myteam] != null) ? oppopentData['events'][myteam] : "";
//     player.opp = opp
//     player.eventId = eventId
//     return player;
// })
// console.log(players)

// for (let i = 1; i <= 6; i++) {
//     let spaces = ' '.repeat(i - 1);
//     let stars = '*'.repeat(13 - 2 * i);
//     console.log(spaces + stars);
//   }

// let arr = [1,1,1,1,22,10,10,3,4,5,5,5,6,7];
// let newArray = [];
// for(let i=0; i<arr.length; i++){
//     if (newArray.indexOf(arr[i]) === -1) {
//         newArray.push(arr[i]);
//       }
// }

// console.log(newArray)

// console.log(0.3 === 0.2 + 0.1);
// console.log(0.2 + 0.1);
// console.log(Number("100"));
// console.log(Number("wecode"));
// console.log(+"100");
// console.log(typeof NaN);
// console.log(Infinity);
// console.log(10 / 0); //Infinity
// console.log(10 / 0 === Infinity);
// console.log(Math.PI);
// console.log(Math.abs(-90));
// console.log(Math.ceil(20.4));
// console.log(Math.floor(20.5));
// console.log(Math.floor("20.5px"));
// console.log(Math.round(20.4));
// console.log(Math.round(20.5));
// console.log(Math.max(2, 4, 12, 56, 123, 12, 34, 56));
// console.log(Math.min(2, 4, 12, 56, 1, 123, 12, 34, 56));
// console.log(Math.pow(2, 4));
// console.log(Math.trunc(20.91));
// console.log(Math.trunc(Math.random() * 10) + 1);
// console.log(10_00000);
// console.log(20_00_0000);
// console.log(Number.isFinite(1));
// console.log(Number.isFinite(10 / 0));
// console.log(Number.isNaN(Number("wecode")));
// console.log(Number.isNaN(10));
// console.log(Number.parseInt("10.3"));
// console.log(Number.parseInt(10.99));
// console.log(Number.parseInt("3s0psdsdsdx"));
// console.log(Number.parseInt("40px120"));
// console.log(Number.parseInt("px30"));
// console.log(Number.parseFloat("10.464"));
// console.log(Number.parseFloat(10.59));
// console.log(Number.parseFloat("10.5033px"));
// console.log(Number(10).toString());
// console.log((10.2022).toFixed(1));
// console.log(34534534543534545345345345345345345435345);
// console.log(typeof 34534534543534545345345345345345345435345n);
// console.log(BigInt(100324343));
// console.log(Number.MAX_SAFE_INTEGER * 199000);
// console.log(BigInt(Number.MAX_SAFE_INTEGER * 199000));
// console.log(5n / 2n);
//  console.log(5n > 2);
// console.log(5n / 2); //wrong
// console.log(10n + 10); //wrong



//  program that shows the delay in execution





  






for(let i=0;i<10;i++){
    if(i===5){
        continue;
    }
    console.log(i)
}































