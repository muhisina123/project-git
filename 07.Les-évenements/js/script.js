console.log('chap7');

/************************/
//Les évènements
/************************/

/*
Les types d'évènement (liste non exhaustive)
    -load 
    - click
    -double click
    -mouse over
    -mouse leave
    -mouse down
    -mouse up
    -mouse enter
    -mouse out
    -key down
    -key up
    -scroll
    -input : changement de valeur au sein d'un champ "input" d'un formulaire
    -change : changement de valeur au sein d'un input, select ou textarea d'un formulaire 
    -submit : soumission d'un formulaire 
*/

/* Evènement de chargement */

    //Pour intéragir avec l'utilisateur, il faut mettre en place un écouteur d'évènement (adEventListener) sur l'objet à manipuler ou à suivre.

    //"window" représente une fenêtre contenant un document DOM.

    window.addEventListener('load', maFonction); //Je mets en  place un écouteur d'évènement. Celui-ci comprend 2 paramètres : 1.le type d'évènement à capturer; 2. Le code à exécuter lorsque l'évènement à lieu. Ici, nous mentionnons une fonction que l'on définira ci-dessous.
    

    function maFonction() {

        setTimeout(function () { //SetTimeout permet de metrre en place un timer.
            console.log('ma page est chargée'); //Lorsque le temps sera écoulé, le texte s'affichera dans la console.
        }, 10000); //Le timer est défini en milisecondes (ici : 10000ms = 10s)
    }

/************************/
//Evènement click
/************************/

//Evènement click

// Etape 1 : sélèction
const div1 = document.getElementsByClassName
('div1')[0];
console.log(div1); //Je vérifie ma sélection

//Etape 2 : évènement
div1.addEventListener('click', jeClique);
//Etape 3  : action
function jeClique() {
    console.log('Je clique sur ma div1');//Je vérifie que ma fonction s'opère à chaque fois que mon évènement a lieu
}

//Exercice : Créer/adapter une interaction permettant de modifier la couleur de fond de la div au click.
div1.addEventListener('click', couleur); //Il est possible d'appliquer plusieurs écouteurs d'évènement sur un même objet.
function couleur() {
    console.log("Change ma couleur de fond");
    if( div1.style.backgroundColor=="") {
        div1.style.backgroundColor="darkseagreen";
    }
    else if (div1.style.backgroundColor !="") {
        div1.style.backgroundColor=="";
    }

}

//Evènement double click
    //Lorsque l'utilisateur double-clique sur un élément

//1. Sélèction
    const div2 = document.getElementsByClassName
    ('div2')[0];
    console.log(div2);
//2. Evènement
    div2.addEventListener('dblclick', doubleClick);
//3. Action
function doubleClick() {
    console.log('bravo !!!');
    div2.style.fontSize = '30px';
}