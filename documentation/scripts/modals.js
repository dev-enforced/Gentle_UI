const btnModalDemo = document.querySelector(".show-modal");
btnModalDemo.addEventListener("click", openModalDemo);

const modalCloseButtons = document.querySelectorAll(".btn-modal-close");
modalCloseButtons.forEach((modalCloseButton) =>
    modalCloseButton.addEventListener("click", closeModal)
);

function openModalDemo(e) {
    const demoModal = document.querySelector(".demo-modal");
    demoModal.style.visibility = "visible"
    demoModal.classList.add("active-modal")
    document.querySelector("body").style.overflow = "hidden";
}

function closeModal(e) {
    const modalContainer = document.querySelector(".demo-modal");
    modalContainer.style.visibility = "hidden";
    document.querySelector("body").style.overflow = "auto";
}