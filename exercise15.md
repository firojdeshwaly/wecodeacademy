## Que:1 What is an object in JavaScript?
### Ans:
```
- In JavaScript, an object is a data structure that allows you to store multiple values and group them together under a single name
- An object is essentially a collection of key-value pairs, where the keys are strings and the values can be any valid JavaScript data type, including other objects. Objects are typically created using object literals or by using the Object() constructor function.

For example, here's how you can create an object literal in JavaScript:

const person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345"
  }
};

```

## Que:2 What is the difference between dot notation and bracket notation for accessing object properties?
### Ans: 
```
-1 In JavaScript, there are two ways to access object properties: dot notation and bracket notation. Both of these notations allow you to access the values of an object's properties, but they differ in some important ways.

Dot notation is the most common way of accessing object properties. With dot notation, you use the dot . operator to access a property of an object. Here's an example:
const person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345"
  }
};

console.log(person.name);
In this example, we use dot notation to access the name property of the person object, and the street property of the address object inside the person object

-2 Bracket notation is another way of accessing object properties. With bracket notation, you use square brackets [] to access a property of an object. Here's an example:
const person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345"
  }
};

console.log(person["name"]);
console.log(person["address"]["street"]); 
In this example, we use bracket notation to access the name property of the person object, and the street property of the address object inside the person object.

The main difference between dot notation and bracket notation is that dot notation requires that the property name be a valid identifier, while bracket notation allows you to use any string as the property name. This means that if the property name contains spaces, hyphens, or any other characters that are not valid in an identifier, you must use bracket notation to access the property.

Another important difference is that with bracket notation, you can use a variable or an expression as the property name, while with dot notation you cannot. This makes bracket notation more flexible in certain situations.

In general, it's best to use dot notation when you can, as it's more concise and easier to read. However, when you need to use a variable or an expression as the property name, or when the property name contains characters that are not valid in an identifier, you should use bracket notation.
```

## Que:3 How do you loop through the properties of an object in JavaScript?
### Ans: 
```
const person = {
    name: "John",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345"
    }
  };
  
  for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }
```

## Que:4 What is the difference between an object and an array in JavaScript?
### Ans:
```
- In JavaScript, both objects and arrays are used to store and organize data, but they have some key differences.
- An object is a collection of key-value pairs, where the keys are strings and the values can be any valid JavaScript data type, including other objects.
- Objects are typically used to represent real-world entities, such as a person or a car, and their properties. 
For example:
const person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345"
  }
};


- An array, on the other hand, is an ordered list of values, which can be of any valid JavaScript data type, including other arrays and objects. Arrays are typically used to store collections of similar data, such as a list of numbers or a list of names. 
For example:
const numbers = [1, 2, 3, 4, 5];
const names = ["John", "Jane", "Bob", "Alice"];

The main differences between objects and arrays are:
- Accessing data: In an object, you access data using property names, while in an array, you access data using numeric indices.
- Ordering: Objects do not have a defined order for their properties, while arrays have a well-defined order for their elements.
- Adding and removing data: In an object, you can add and remove properties dynamically using dot notation or bracket notation. In an array, you can add and remove elements dynamically using methods like push, pop, shift, and unshift.
- Iterating: Objects are typically iterated using a for...in loop, while arrays are typically iterated using a for loop or methods like forEach, map, reduce, and filter.
- In general, objects are best used when you need to represent a collection of related properties, while arrays are best used when you need to store a collection of similar data in a specific order. However, in many cases, objects and arrays can be used interchangeably, depending on your specific use case.

```

## Que:5 Write a JavaScript function to convert an object into a list of `[key, value]` pairs.
### Ans:
```
function objectToList(obj) {
    const result = [];
    for (let key in obj) {
      result.push([key, obj[key]]);
    }
    return result;
  }

  const person = {
    name: "firoj",
    age: 23,
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345"
    }
  };
  
  const result = objectToList(person);
  console.log(result);
```

## Que:6 Write a function that takes an object representing a person and returns their full name.
### Ans:
```
function getFullName(person) {
  const { firstName, lastName } = person;
  return `${firstName} ${lastName}`;
}
const person = {
  firstName: "firoj",
  lastName: "khan",
};

const fullName = getFullName(person);
console.log(fullName);
```

## Que:7 Create an Object with your personal details. Now print all the keys of the object in ascending order.
### Ans:
```
const personalDetails = {
    name: "firoj",
    age: 24,
    gender: "male",
    occupation: "Node.js developer",
    country: "india"
  };
  
  const keys = Object.keys(personalDetails).sort();
  console.log(keys,"--")
  
  for (let key of keys) {
    console.log(key);
  }
```

## Que:8 Create an Object with your personal details. Now filter out all the values of the object and show them in descending order.
### Ans: 
```
const personalDetails = {
  name: "firoj khan",
  gender: "male",
  occupation: "node.js developer",
  country: "india"
};

const values = Object.values(personalDetails).sort((a, b) => b - a);

console.log(values);
```


