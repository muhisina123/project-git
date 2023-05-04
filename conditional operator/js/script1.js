 
/**** 
 * var email=prompt("Email");
var password=prompt("password");
alert('welcome to discord!')
var name1=prompt(" may we know your Name ?");

var first_name = name1;

if(first_name==first_name){
    console.log(" hello " + first_name);

} else {
    console.log(" hello young discordian ");

}



var color="purple";



if(color == "blue"){
    console.log("the  chosen color is  blue , it  symbolizes serenity, stability, inspiration, or wisdom");
}else if(color == "orange"){
    console.log("the chosen color is  orange, it symbolizes optimism and energy");
}else if(color =="purple"){
    console.log(`the chosen color is  '${color}' it symbolizes royalty, nobility, luxury, power, and ambition`);
}else if(color =="pink"){
    console.log(" the chosen color is  pink, it symbolizes love, kindness, and femininity ");
}
else{
    console.log("the color is not listed");
}


**/



var operation=prompt(" choose a number to perform a mathematical operation 1.add  2.substract 3.divide 4.multiply");

const a=prompt(" enter first value");
const b=prompt(" enter second value");
let c;

switch( operation ){

    case 1:
        c=a+b;
    console.log("c value is : " + c);
    break;

    case 2:
        c=a-b;
        console.log("c value is : " + c);
        break;

    case 3:
        c=a/b;
        console.log("c value is : " + c);
        break;

    case 4: 
    c=a*b;
    console.log("c value is : " + c);
    break;

    default:
    console.log("specify the operation");
     break;
}
