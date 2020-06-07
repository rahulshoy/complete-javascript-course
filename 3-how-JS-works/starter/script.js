///////////////////////////////////////
// Lecture: Hoisting


console.log(age);
var age=26;
console.log(age);

function foo()
{
    console.log(age);
    var age = 'twenty six';
    console.log(age);
}
foo();
function foo()
{
    console.log(age);
    var age = 'twenty sixes';
    console.log(age);
}
foo();
function foo()
{
    console.log(age);
    var age = 'twenty sixe\'s';
    console.log(age);
}















///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
   // var b = 'Hi!';
    second();

    function second() {
         c = 'Hey!';
        b = 'there';
        console.log(a + b + c);

        third();
    }
}

function third()
{
    var d = 'thereafter';
    console.log(a + b + c  + d);
}

rst = 133;
console.log(rst);
*/


// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(b + c + a);
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a  + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword


//console.log(this);
/*
calculateAge(1997);

function calculateAge(year) {
    console.log(2020 - year);
    console.log(this);
}
*/


var person = {
    name : 'Rahul',
    age : 24 ,
    gender : 'M' ,
    calculateAge : function() {
        console.log(this);
    }
}

person.calculateAge(1997);

console.log(this);

