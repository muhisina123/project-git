
console.log('loops '); // iterative or recursive structure. it is a way of repeating the code in loop.
//the objective is to reproduce operation  automatically instead of writting each operation manually.

console.log('chap3');

/****************************/
// chap 3- Les boucles
/****************************/

/* Boucle : définition*/
    //Une boucle, aussi appelée structure itérative ou récursive, est un moyen de répéter du code en boucle. L'objectif est de reproduire automatiquement une opération un nombre de fois défini pour ne pas avoir à le réécrire manuellement.

/* Les types de boucles */
    //La boucle while
    //La boucle do-while
    //La boucle for

/****************************/
// 1. La boucle "while"
/****************************/


var i = 0; // "i" vaut pour "itérateur". Par convention, la variable est nommée ainsi mais pourrait porter n'importe quel nom. Cette variable va servir de point de départ pour notre boucle. Elle servira de référence pour éfféctuer les tours de notre boucle.

while(i < 5) { // Le code dans les parenthèses définit les conditions d'entrée et de sortie de notre boucle. Traduction : "tant que i est inférieur à 5..."
    //...le code dans les accolades s'exécute.
    console.log(i); //Affiche la valeur de "i"
    i++; // Incrémentation. traduction: J'augmente la valeur de "i" de 1. Cela revient à écrire : "i = i+1". Ici, "i" fonctionne comme un compteur qui va informer la boucle du tour dans lequel elle se trouve et si celle-ci doit continuer de s'exécuter ou s'arrêter.
} 

//Exercice : Créer une boucle qui affiche dans la console tous les jours du moi en cours jusqu'à aujourd'hui.
    //Exemple : 
        // 1 avril 2023
        // 2 avril 2023
        // ...
        // 26 avril 2023

var J = 0;
while(J <= 26) {
    console.log(i+" avril 2023");
    i++;
}

var i = 10;
while(i > 0) {
    if(i == 0){
        console.log("Bon appétit les amis !");
    }
    else if(i == 1){
        console.log("il reste " + i + " minute");
    } else{
    console.log("il reste " + i + " minutes");
    }
    i--; //Décrémentation. Diminution de la valeur de "time" de 1. Revient à écrire "time = time-1"
}
if (i==0) {
    console.log("c'est prêt");
}


/* La boucle infinie */
//Une boucle infinie est une boucle dont la condition de sortie n'est pas atteignable. Ent d'autres termes, la condition est toujours remplie.
//Exemple :
var i = 1;

//Création d'une boucle infinie (qui ne s'arrête jamais) - Attention - toujours masquer ce code dans le cours
// while(i >0){
//     console.log(i);
//     i++;
// }

//2 solutions pour sortir d'une boucle infinie :

//Solution 1 :
while(i >0){
     console.log(i);
     i++;
     if(i == 10000){
        //S'arrête à 9999
        i = 0;
     }
 }

 //Solution 2 :
let j= 1;
 while(j >0) {
    console.log(j);
    j++;
    if(j == 100000) {
        break; //En utilisant le mot-clé "break", le code arrête de s'exécuter.
    }
 }

 /****************************/
// 2. La boucle "do-while"
/****************************/

//La boucle do-while fonctionne exactement comme la boucle while à un détail près : la condition est renseignée à la fin et non au début
var i= 0;
do { // Fait ..
    console.log(i);
}while(i>1);// ... tant que "i" est supérieur à 1
//Ici, il n'y a pas d'itération de "i" et la condition n'est jamais respectée. En revanche, le sens d'écriture de la structure de la boucle "do-while" fait que le code dans les accolades s'exécute avant la vérification de la condition. Ainsi, la boucle affiche la valeur de "i" une première fois avant de vérifier que "i" est bien supérieur à 1.

/****************************/
// 3. La boucle "for"
/****************************/
for(i=0;i<=10;i++){

console.log(i);
i++;

}