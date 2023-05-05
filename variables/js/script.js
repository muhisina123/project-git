//comment in one line
/* comments in multiple lines */




/** 
// the dialogue box is a little window which appears on the page with the help of the js code and permits to communicate with the visitor of the website.the style of the dialogue box is defined by the navigator.
alert('hello world');               //pop up dialogue box
confirm("did you understand?");     // for questioning with options , this function waits a confirmation
prompt('fine? yes or no');          // prompts a question, displays a field  to type an answer 


//  2.2 display on the current documents


document.write("coucou"); //displays texts in the current doc
document.write('<p> i am a <em>paragraph </em> '); // the usage of document.write isnt recommende


//3.3 the console


/* console:definition */


console.log(" console"); // the first code to be inscribed in the js file to verify the connection with the html file

// a command line interface in your browser that can execute snippets of code.



//3.the variables


// variable declaration

var maVar;

// assigning a value to a variable
maVar='assigned value of the variable ';


//printing variable value in the console
console.log(maVar);


var maVar2=' variable type';

// rules for creating a variable  1. it should start with a letter or underscore_ 2.shouldnt start with number 3.no special characters should be used 4.  it is case sensitive


console.log(maVar2);

console.log(typeof maVar2);  // to know the type of the variable "typeof" is used


//4. datatypes 



var string=' string with single quotes';
console.log(string);


var string1=' string with double quotes';
console.log(string1);

var string2='it\'s been a long time';   // backslash is used when apostrophe is used to avoid confusing the computer
console.log(string1);

var string2="it 's been a long time";   // double quotes  is also used when apostrophe is used to avoid confusing the computer
console.log(string2);



var id=123 ; 
console.log(typeof id);  // number
var value=12.3 ; 
console.log(typeof value);  // number
var age='26 '; 
console.log(typeof age); // string
var bool=true ; 
console.log(typeof bool); //boolean

var nulVar=null ; 
console.log(typeof nulVar); // null     it is an object type 

var x ; 
console.log(x); // undefined value 

var array=[] ; 
console.log(array); 
var array1=array(); 
console.log(array1); 
array=[65,'mushi',true,null,undefined,[1,2,3]];// array is a table  with a value associated to each value of the table
console.log(array); 
console.log(typeof array);// it is of object type


var series1=" snowfall ";
var series2=" power";var series3=" malcom ";var series4=" the night agent";
var series5="Les demoiselles du téléphone";

var fav_series=series1;
console.log(fav_series);

console.log('my favourite series is'+ fav_series);


console.log( 'La série "'+ series1+ '" arrive en tête du classement avec 2 misérables points, suivie de "'+series4+'" avec une demi main levée, et "' +series5+ '" qui a totalement été désavoué par son instigatrice');  


// template literal/ string literals 

console.log( `La série '${series1}' arrive en tête du classement avec 2 misérables points, suivie de'${series4}' avec une demi main levée, et '${series5}' qui a totalement été désavoué par son instigatrice`); // `` marks start and end of the instruction
//${} space reserved for the value

var liberation=" we're liberated ";
var reason=" it is a break";
liberation+=reason; //iteration 
console.log(liberation);

