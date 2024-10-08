// Functions

let x = myFunction(2,3);

function myFunction(a,b){
    return a*b;
}

console.log(x)
// --------------------------------------------------------------------------------

// Local variables

function localVariables(){
    let name = 'srikanth';
    console.log(name);
}
localVariables(); //calling function, we can call before intialization of function
// console.log(name); will not to able to access since name is local variable
// ----------------------------------------------------------------------------------

//Javascript objects

//To create object
const person = {};
//We can also create object with new keyword ex const person = new object();
//Adding attributes
person.firstName = 'srikanth';
person.lastName = 'ratnala';
person.age = 28;

console.log(person)

//Accessing attributes
console.log(person['firstName'])
console.log(person.lastName)

// -------------------------------------------------------------------------------------------------

// Example of accessing attributes with function.

const person_details = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName; //this refers to the current object
    }
  };

console.log(person_details.fullName())

// need to check with parameters


// ------------------------------------------------------------------------------------

//objects are mutable
/*
The object y is not a copy of person_details. The object y is person_details.
The object y and the object person_details share the same memory address.
Any changes to y will also change person_details:
*/

const y = person_details; 
console.log(y);

y.firstName = "srikanth";
console.log(y.firstName)
console.log(person_details.firstName)

// ---------------------------------------------------------------------------------
/*
An Object is an Unordered Collection of Properties
Properties are the most important part of JavaScript objects.

Properties can be changed, added, deleted, and some are read only.
*/

//Accessing JavaScript Properties
let age = person.age;

//Adding New Properties
person.nationality = "English";

console.log(person)

//Deleting Properties

delete person.age;

console.log(person) // delete person["age"]; we can also use this.

//---------------------------------------------------------------------------
//Nested Objects

myObj = {
  name:"John",
  age:30,
  myCars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}

console.log(myObj.myCars.car1)

//--------------------------------------------------------------------------------

//JavaScript Object Methods
/*
Object methods are actions that can be performed on objects.

A method is a function definition stored as a property value.
*/


const object_method = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(object_method.fullName())
// --------------------------------------------------------------------------------
// Displaying Object Properties
document.getElementById("demo").innerHTML +=
object_method.firstName + "," + object_method.id + "," + object_method.fullName();

// Displaying Properties in a Loop
let val = [];
for(let x in object_method){
  if (typeof object_method[x] !== 'function'){
    val += `${x}: ${object_method[x]} <br>`
    console.log(`${x}: ${object_method[x]}`)

  }
  else{
    console.log(`${x}:this is function`)
    val += `${x} : this is function <br>`
  }
}

document.getElementById('demo1').innerHTML += val


//Using Object.values()

// Object.values() creates an array from the property values:

const myArray = Object.values(object_method);
document.getElementById("myarray").innerHTML += myArray;


//Using Object.entries()
// Object.entries() makes it simple to use objects in loops:

const fruits = {Bananas:300, Oranges:200, Apples:500};
let fruits_val = "";

for(let [fruit, value ] of Object.entries(fruits)){
  fruits_val += fruit + ": " + value + "<br>"
}
document.getElementById('fruits_id').innerHTML += fruits_val;


// Using JSON.stringify()

/* JavaScript objects can be converted to a string with JSON method JSON.stringify().

JSON.stringify() is included in JavaScript and supported in all major browsers.*/

let myString = JSON.stringify(fruits);
console.log(myString);

// -------------------------------------------------------------------------------------

// Object Constructor Functions
/*Sometimes we need to create many objects of the same type.

To create an object type we use an object constructor function.

It is considered good practice to name constructor functions with an upper-case first letter. */

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// The value of this will become the new object when a new object is created.
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

console.log(myFather.firstName);
console.log(myMother.firstName);

// Property Default Values
// A value given to a property will be a default value for all objects created by the constructor:

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English";
}

const myDaughter = new Person("Darshini", "Doe", 50, "blue");

console.log(myDaughter.nationality);

// Adding a Property to an Object
myDaughter.speaks = "Spanish";
console.log(myDaughter.speaks);

// you can NOT add a new property to an object constructor:

Person.new_field = "Ratnala"; // will not work with a 0bject constructior.
console.log(myDaughter.new_field);

// To add a new property, you must add it to the constructor function prototype:

Person.prototype.new_field = "new value";
console.log(myDaughter.new_field);


//Constructor Function Methods
// A constructor function can also have methods:

function car(brand,year,milage,color){
  this.brand = brand;
  this.year = year;
  this.milage = milage;
  this.color = color;
  this.car_info = function(){
    return this.brand + " car has mileage of " + this.milage + " bought in " + this.year
  }
}


const car1 = new car("filat",2015,20,"red");
// console.log(car1)
document.getElementById('car_info').innerHTML += car1.car_info();