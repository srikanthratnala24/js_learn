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


