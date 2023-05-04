var series1=" snowfall ";
var series2=" power";
var series3=" malcom ";
var series4=" the night agent";
var series5="Les demoiselles du téléphone";

/*var fav_series=series1;
console.log(fav_series);

console.log('my favourite series is'+ fav_series);*/

console.log( 'La série "'+ series1+ '" arrive en tête du classement avec 2 misérables points, suivie de "'+series4+'" avec une demi main levée, et "' +series5+ '" qui a totalement été désavoué par son instigatrice');  

console.log( `La série '${series1}' arrive en tête du classement avec 2 misérables points, suivie de'${series4}' avec une demi main levée, et '${series5}' qui a totalement été désavoué par son instigatrice`); 




console.log(5+5);
console.log( 15-5);
console.log(6*6);
console.log(65/5);
console.log(23%3);    
console.log(25**2);

var x=5;
var y=3;
var z= x+y;
z+=2;
console.log(z);
z-=2;
console.log(z);
z*=2;
console.log(z);
z/=2;
console.log(z);
z%=2;
console.log(z);


/* Opérateurs logiques */
/*
    && : et (and en anglais)
    || : ou (or en anglais) [Mac : option + shift + lettre L]
    !  : n'est pas (not en anglais)
*/

/* Opérateurs de comparaison */
/*
    == : comparaison de valeur
    === : comparaison de valeur ET de type
    != : différence en valeur (inégalité)
    !== : différence en valeur et en type (inégalité stricte)
    > : supérieur à ... 
    < : inférieur à ... 
    >= : supérieur ou égal à
    <= : inférieur ou égal à
*/
var height_joe=258;
var height_paul=250;
var height_mark=248;

//  if statement 

if(height_joe>height_paul){
    console.log("joe is taller than paul");
    var height_in_two_years_of_paul=259;
}


//if - else statement

if(height_joe>height_paul){
    console.log("paul is always  shorter  than joe");
}
else{

    console.log("paul has become taller than paul");

}

//use of logical operator

/************** &&  *****************/ 
//both conditions must be true

if(height_joe>height_paul && height_paul >height_mark){
    console.log("joe and paul  are  taller than mark");
   
}
else{

    console.log("height of the person doesnt matter");

}

/************** ||  *****************/ 
// atleast one condition must be true

var hour=9.10;
var completeGroup=false;
if(hour >= 9 || completeGroup==true)
{
    console.log("the course starts");

}else{
    console.log("we wait for everyone until 9h ");
}


// homework

var first_name="  muhisina" ;

if(first_name != " "){
    console.log(" hello " + first_name);

} else {
    console.log(" hello young discordian ");

}

var username="muhisina";
var  defaultname= username || " hello discordian" ; // it takes either username or the string

console.log("hello" +defaultname);

/*************  nested if else **************** */


var marathon=42;
var actualposition=30;

if(actualposition >= marathon/2){
    console.log("you are in the middle of the race ");
}else if(actualposition == marathon){
    console.log("you won the race");
}else if(actualposition > marathon){
    console.log("you have gone over board");
}
else{
    console.log("i couldnt track your position for the moment !");
}


var color='violet';
switch( color ){

    case  'blue':
    
    console.log("blue");
    break;

    case 'orange':

        console.log("orange");
        break;

    case 'violet':
     
        console.log("violet");
        break;


    default:
    console.log("specify the color");
     break;
}
