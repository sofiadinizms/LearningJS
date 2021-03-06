/*variables are containers for storing data values. To declare a variable in JavaScript, you should start with the keyword var followed by the variable name, then the = to assign a content to that variable.
*/
/*In JavaSript, the = sign is an assignment operator, not an "equal to" operator*/ 

var name = "Sofia Diniz";

/* DATA TYPES
*
*String: series of characters. Can be used with single or double quotes
*/
var name = 'Sofia Diniz';
var name = "Sofia Diniz";
/*
*Number: can be written with decimals (float) or without (interger)
*/
var weight = 49.5;
var age = 18;
/*
*Boolean: can only have two values- true or false
*/
var human = true;
var human = false;
/*
*Array: a special variable that con hold more than one value at a time. It can be created using square brackets or the JavaScript keyword new.The values can be acessed by refering to their index number, that starts at 0
*/
var grades = [10,20,30,40];
var grades = new Array(10,20,30,40);
var sofiasGrade = grades[3];
/*
*Object: objects are containers for named values that are either properties or methods. If I want to access a specific proprety inside of an object, I should write the name of the object, a dot and theen the name of the porperty. Also, if I want to use an Array element inside of an object I can, just by calling it by the name of the array + the number of the elemente inside brackets, like previously shown.
*/
var sofia = {
    firstName: "Sofia",
    lastName: "Santos",
    age: 18,
    eyeColor: "hazel"
};
console.log(sofia.firstName);
/*
*Undefined: In JavaScript, you can leave a variable without a value, making her value undefined
*/
var name;
/*
*Null: leaves a value empty
*/
var name = null




/*MATH OPERATORS
*
* Addition: +  */

var x = 5+10;

/*
*Subtraction: -  */

var y = 10-5;

/*
*Multiplication = *  */

var z = 10*5;

/*
* Division = /  */

var w = 10/5;

/*
*Modulus (rest of the division) = %  */

var k = 10%5;

/*
*Increment (plus one) = ++  */

var x = 15;
x++;
16

/*
*Decrement (minus one) = --  */

var x = 16;
x--;
15;

/*
*To add to an existing numeric variable, instead of doing ption A,just do B  */

x = x + 1;
x+=1;




/*LOGICAL OPERATORS
*
*And (&&)  */

true && true == true
true && false == false
false && true == false
false && false == false

/*
* Or (||)  */

true || true == true 
true || false == true
false || true == true 
false || false == false

/*
*Not (!)  */

!true == false
!false == true 




/* CONDITIONALS 
*
*If, else if and else  */

if (condition) {
    /*code to execute if the condition is true*/
} else if (condition) {
    /*code to execute if the condition is true and the first is false*/
} else {
    /*else, run this code*/
}

/*
*Switch: Statement that atributes a certain value to an expression, compares the value to the ones of each code block and executes the one with a matching value.  */

switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  };

/*
*Ternary: a conditional operator that assigns a value to a variable based on some condition.  */

variablename = (condition) ? value1:value2

var voteable = (age < 18) ? "Too young":"Old enough";





/* LOOPS AND ITERATION
*
*For : a for loop is repeated until the specified condition is false */

for ([initial expression]; [condition]; [increment])
    declaration

for (var i = 0; i < 100; i++) {
   console.log(i)
};

/*
*While: executes its instructions as long as the specified condition is evaluated as true  */

while (condition)
  declaration
  

var j = 0;
while (j < 100) {
    console.log(j)
    j++
};

/*
*Functions: 

/*ARRAY.FILTER

/*DOM Manipulation
  Manipulating the DOM means using JavaScript to manipulate elements from your HTML code*/
  /*HTML*/
  <button onclick="mostraAlerta()"></button>
  
  /*JavaScript*/

  function mostraAlerta() {
    alert('Botão foi clicado')
  }

/*How to refer HTML elements on JavaScript:*/
- document.getElementbyId('[insert here the elements ID]');
- document.getElementsByTagName('[insert here the type of tag (p, a , img, etc) you want to use]'); /* This method always returns an array,since it can't know if there will be one or more elements wth that tag*/
- document.getElementByClassName([insert className here]); /*This also returns an array, since a class isn't unique to a single element*/
- document.querySelector('body div#app input');/*querySelector allows you to walk through the DOM using the cascating systm from CSS to find a specific item. Only returns a single element, unless you use querySelectorAll*/

/*How to create HTML through JavaScript*/
const linkElement = document.createElement('a') /*This will create an element with the tag a, indicating it will be a link*/
linkElement.setAttribute('href', '[insert url here]') /*This creates the attribute href and adds a URL to it*/

const textElement = document.createTextNode('Acesse o ite')/*This creates another element, this time its a text*/
linkElement.appendChild(textElement); /*append Child makes this text a 'child' of the linkElement'*/

const containerElement = document.querySelector('#app')/*selects the div App as the containerElemet*/
containerElement.appendChild(linkElement); /*The text is a child of the URL and now the URL is a child of the App DIV, successfuly embebeding the link on the text and putting them on the screen*/

removeChild /*is a functions able to remove a child from its parent element or DIV*/

/*Manipulating CSS styling with JavaScript*/
const boxElement = document.querySelector('.box');

boxElement.style.width = 100 /*On this example I set the boxElement width to 100px. When using JS, there's no need to add px after the number.*/
boxElement.style.backgroundColor = '#f0f0f0';