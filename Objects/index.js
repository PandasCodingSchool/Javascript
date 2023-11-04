//OBJECTS
/*
There are three ways to create an Object in JavaScript.
◆ By Object literal
◆ By creating instance of Object directly (using new keyword)
◆ By using an object constructor (using a new keyword) - you need to create a function
with arguments. Each argument value can be assigned in the current object by using
this keyword.
*/

// By literal
const student = {
  name: "Abhimanyu Mishra",
  age: 22,
};
console.log(student);

// By creating instance of Object directly (using new keyword)
const Emp = new Object();
Emp.name = "Pankaj";
Emp.age = 24;
console.log(Emp);

// By using an object constructor (using a new keyword)
function Department(id, name) {
  this.id = id;
  this.name = name;
}

const dep1 = new Department(1, "CSE");
console.log(dep1);
const dep2 = new Department(2, "ME");
console.log(dep2);

// for (let i = 0; i < 10; i++) {
//   const dep = new Department(1, "CSE");
//   console.log(dep);
// }

// Methods of Objects

// 1. Object.assign(targetObject, sourceObject)

const Emp2 = new Object();
Object.assign(Emp2, Emp);
console.log("MES:", Emp2);

// 2. Object.create()
// Define a prototype object
const newSchoolP = {
  office() {
    console.log("This is office");
  },
};

const Obj1 = Object.create(newSchoolP);
console.log(Obj1.office());

// 3. Object.keys()
const keys = Object.keys(Emp2);
console.log(keys);

// 4.Object.values()
console.log(Object.values(Emp2));
