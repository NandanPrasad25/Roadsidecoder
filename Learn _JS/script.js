// 1.  Var, Let, Const

// function scope , Block scope, Global scope
// Variable Shadowing - Can shadow var variable with let but not let variable with var ( illigal Shadowing ).

// Declaration
// Can redeclare var as many times but not let and const

//Declaration without initialization
// Var and let can be but const cannot be 

//Re-initialisation
// Var and let - Okay   const- not okay

// Javascript execution context
// creation phase - creates global or window object - setups memory heap for storing variables & function references - initialize functions & variables declarations with undefined - it stores entire functions.

//Hoisting
//Var variables are hoisted and can be accesible before but with undefined
//let variables are also hoisted but stored in temporal dead zone ( time between declaration and initialization of let and const variables)

/////////////////////////////




// 2. Map , filter & Reduce

//map = Returns new Array with each element modified with given condition.
//Filter = Returns new array after filtering with given condition.
//Reduce = Reduces an array of values down to the one single value. ( four parameters = accumulator, current, index, array )


//Prototype of map();

Array.prototype.myMap = function(cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this))
    }
    return temp;
}

//Prototype of filter();

Array.prototype.myFilter = function(cb) {
    let temp = [];
    for (let i= 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            temp.push(this[i])
        }
    }
    return temp;
}

//Prototype of Reduce;

Array.prototype.myReduce = function(cb, initialValue) {
    let accumulator = initialValue;

    for (let i=0; i < this.length; i++) {
        accumulator = accumulator? cb(accumulator, this[i], i, this) : this[i]
    }

    return accumulator;
}

//Questions

let students = [
    { name: "Piyush", rollNumber: 31, marks: 80 },
    { name: "Jenny", rollNumber: 15, marks: 69 },
    { name: "Kaushal", rollNumber: 16, marks: 35 },
    { name: "Dilpreet", rollNumber: 7, marks: 55 },
  ];

//Return the names only in Capital

let names = students.map(stu => stu.name.toUpperCase())
// console.log(names);

//Return the students who scored more than 60

let studentsHigh = students.filter(stu => stu.marks > 60)
// console.log(studentsHigh);

//Get the details of students who scored more than 60 marks and have rollNumber greater than 15.

let studs = students.filter(stu => stu.marks > 60 && stu.rollNumber > 15);
// console.log(studs);

//Sum total of the marks of the students

let totalMarks = students.reduce((acc, curr) => {
    return acc + curr.marks;
}, 0)
// console.log(totalMarks);

//print the total marks of the students with marks greater than 60 after 20 marks has been added to those students who scored less than 60.

let studentsMar = students.map(stu => {
    if(stu.marks < 60) {
        stu.marks = stu.marks + 20;
    }
    return stu;
}).filter(stu => stu.marks > 60);

// console.log(studentsMar);

//Functions

//1. Function Expression

//2. Function Declaration

//3. IIFE

//4. Function Scope

//5. Closures

for (let i=0; i <= 10; i++) {
    setTimeout(function() {
        console.log(i)
    }, i*1000)
}

// Params & Arguments
//Rest Parameter & Spread Operator

//Function Hoisting

// Callback functions
// Arrow Functions
// "this" keyword to Arrow and normal function 



//CLOSURES

//Lexical Scope

//How does a Closure work

function createBase(num) {
    return function(innerNum) {
        return num + innerNum
    }
}

var addSix = createBase(6);
addSix(10);
addSix(21);

// Closure scope chain

//Closure used for time optimisation

// Private counter using closure

function counter() {
    var _counter = 0;

    function add(increment) {
        _counter += increment;
    }

    function retrive() {
        return "Counter = " + _counter;
    }
    
    return {
        add,
        retrive
    };
}
const c = counter();
// console.log(c.add(5));
c.add(10)
// console.log(c.retrive());

//Module pattern

function modulePattern() {
    function privateMethod() {
        console.log("this is private function")
    }

    return function publicMethod() {
        console.log("this is public method")
    }
}

modulePattern.publicMethod();
modulePattern.privateMethod();


// How to ensure a function runs only once using closure

let view;
function Like() {
    let called = 0;

    return function(){
        if (called > 0){
            console.log("Already Subscribed");
        } else{
            view = "Roadsidecoder";
            console.log("Subscribe", view);
            called++;
        }
    };
}
let isSub = Like();
isSub();
isSub();
isSub();
isSub();

// Once polyfill using closure

//Memoize polyfill and how does it use closure

function myMemoize(fn,context) {
    const res = {};
    return function(...args) {
        var argsCache = JSON.stringify(args);
        if(!res[argsCache]) {
            res[argsCache] = fn.call(context || this)
        }
        return res[argsCache];
    }
}

const clumsyProduct = (num1,num2) => {
    for (let i = 1; i <= 100000000; i++) {
        return num1 * num2;    
    }
}

const MemoizeClumsyProduct = myMemoize(clumsyProduct);

// console.time("First call");
// console.log(MemoizeClumsyProduct(9467,7649));
// console.timeEnd("First call")

// console.time("Second call");
// console.log(MemoizeClumsyProduct(9467,7649));
// console.timeEnd("Second call");

//Closure and Scope


// CURRYING

//Convert normal function to currying function

function f(a,b) {
    console.log(a,b)
}

function f(a) {
    return function(b) {
        return `${a}, ${b}`
    }
}

// sum(2)(6)(1)

function sum(a) {
    return function(b) {
        return function(c) {
            return a+b+c;
        }
    }
}


//Maths operations

function evaluate(operation) {
    return function(a) {
        return function(b) {
            if(operation === "addition") return a+b;
            else if (operation === "subtract") return a-b;
            else if (operation === "multiply") return a*b;
            else if (operation === "divide") return a/b;
            else return "invalid operation";
        }
    }
}

// console.log(addition(1)(2));

//Infinite currying with sum function

function sum(a) {
    return function(b) {
        if(b) return sum(a+b);
        return a;
    }
}

// console.log(sum(1)(2)(3))

//Currying and partial application

//Manipulating DOM ( A function with Id parameter and then return function with context parameter )

//Converts f(a,b,c) to f(a)(b)(c);

function curry(func) {
    return function curriedFunc(...args) {
        if(args.length >= func.length ) {
            return func(...args)
        } else {
            return function (...next) {
                return curriedFunc(...args, ...next)
            }
        }
    }
}

// const sum = (a,b,c,d) => a + b + c + d;

// const totalSum = curry(sum);

// console.log(totalSum(a)(b)(c)(d))

//PROMISES

//new Promise(Resolve, Reject) => Resolve and Reject are functions and this could be done with bind method.

//Q1 - what is the Output

console.log('start');

const promise1 = new Promise((resolve, reject) => {
    console.log(2);
    resolve(2);
})

promise1.then(res => {
  console.log(res)
})

console.log('end');

//Q2 

async function loadJson(url) {
    const response = await fetch(url);
    if(response.status == 200) {
        const data = await response.json();
        console.log(data);
    }
    else {
        throw new Error(response.status)
    }
}