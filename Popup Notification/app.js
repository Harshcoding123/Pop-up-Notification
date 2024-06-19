let submit =document.querySelector("#submit");
let okCard =document.querySelector("#okCard");
let card= document.querySelector("#card");
submit.addEventListener("click",()=>{
    card.style.visibility ="visible";
    console.log("hello");
})
okCard.addEventListener("click",()=>{
    card.style.visibility ="hidden";

})

