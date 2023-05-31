// console.log(document.getElementById("family").innerText);
// console.log(document.getElementById("myfamily").innerText);
// console.log(document.getElementById("js").innerText);
// document.getElementById("myfamily").innerText = "Hello Wecode Academy";

// console.log(document.getElementsByClassName("test"));
// document.getElementsByClassName("test")[2].innerText = "Testing";

// console.log(document.getElementsByTagName("h1"));
// document.getElementsByTagName("h1")[1].innerText = "Rajasthan Royals";

// console.log(document.getElementsByName("123"));

// console.log(document.querySelector("#myfamily").innerText);

// console.log(document.querySelector(".test").innerText);

// console.log(document.querySelector("h2"));

// console.log(document.querySelector("span > h2"));

// console.log(document.querySelectorAll("h2"));

// console.log(document.getElementById("myfamily").innerText);
// console.log(document.getElementById("myfamily").textContent);

// document.getElementById("myfamily").style.backgroundColor = "blue";
// document.getElementById("myfamily").style.color = "red";

// console.log(document.getElementById("myfamily").innerHTML);
// document.getElementById("myfamily").innerHTML = `
// <input type='text' value='Hello'/>
// `;

// Q2 ----------------
// function calculate() {
//     document.getElementById("input-box").value = eval(
//       document.getElementById("input-box").value
//     );
//   }

const familyMap = new Map();
familyMap.set("rehan", {
  name: "Rehan",
  age: 21,
  mobile: 945454545,
  address: "Jaipur",
  relation: "Brother",
  image: "",
});

familyMap.set("sajid", {
  name: "Sajid",
  age: 21,
  mobile: 7876876665,
  address: "Jaipur",
  relation: "Cousing",
  image: "sajid.png",
});

familyMap.set("arun", {
  name: "Arun",
  age: 43,
  mobile: 5675676767657,
  address: "Nagaur",
  relation: "Father",
  image: "arun.png",
});
function showDetails(key) {
  const obj = familyMap.get(key);
  document.getElementById("family").src = obj.image;
  document.getElementById("intro").innerText = obj.name;
  document.getElementById("age").innerText = obj.age;
  document.getElementById("mobile").innerText = obj.mobile;
  document.getElementById("address").innerText = obj.address;
  document.getElementById("relation").innerText = obj.relation;
}