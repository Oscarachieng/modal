/*
Grab the elements and assign to variable.
Add click event listeners to the elements.
and to the overlay.
*/
//Grab the elements
const openModal = document.querySelectorAll(".open-modal");
const closeModal = document.querySelector(".close-window");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

// functions to hide and open the modal window.
const showModal = function (){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

const hideModal = function (){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}
// Adds the event listeners.
openModal.forEach(item => item.addEventListener("click", showModal));
closeModal.addEventListener("click", hideModal);
overlay.addEventListener("click", hideModal);

