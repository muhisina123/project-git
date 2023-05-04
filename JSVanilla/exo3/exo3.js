const inputName = document.querySelector(".nom");
const inputPrenom = document.querySelector(".prenom");
const inputAge = document.querySelector(".age");
const select = document.querySelector("select");

const info = document.querySelector(".info")

const form = document.querySelector('form > input');


let nom = "";
let prenom = "";
let age = "";
let animal= "";


inputName.addEventListener("input", (e) => {
    console.log(e.target.value);
    nom = e.target.value;
    console.log(nom);

})
inputPrenom.addEventListener("input", (e) => {
    console.log(e.target.value);
    prenom = e.target.value;
    console.log(prenom);

})
inputAge.addEventListener("input", (e) => {
    console.log(e.target.value);
    Age = e.target.value;
    console.log(Age);

})
select.addEventListener("input", (e) => {
    console.log(e.target.value);
    animal = e.target.value;
    console.log(animal);
})

form.addEventListener('click', (e) => {

    e.preventDefault();
    console.log("form");


    
    if(cgv.checked){
       // console.log("cgv checked");

            info.innerHTML = `
        <h4>Nom: ${nom} </h4>
        <h4>Prenom: ${prenom} </h4>
        <h4>Age: ${age} </h4>
        <h4>Animal: ${animal} </h4>
        `

    }else {
        alert("veuillez cocher les CGV")

    }

})



