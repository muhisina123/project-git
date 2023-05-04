const button = document.querySelector('button');
const aside = document.querySelector('aside');
// console.log(aside);


button.addEventListener('click', () =>{
   // aside.style.color = "white";

    // if( aside.style.display === "none") {
    //     aside.style.display = "block";
    // } else {
    //     aside.style.display = "none";
    // }

    aside.style.display == "none" ? aside.style.display = 
    "block" : aside.style.display = "none";

})
