console.log('hello');
//Exercice 3
const button = document.querySelector('.button')
const parag= document.querySelector('#parag1')
button.addEventListener ('click', () =>{
    parag1.classList.add('active')
})

// Autre methode


//exo 2

const button2 = document.querySelector('button'); 
button2.addEventListener("click", () => {
    button2.innerText = "vous m'avez cliqué";
})