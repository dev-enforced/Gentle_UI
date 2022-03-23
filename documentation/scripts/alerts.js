const closeIcon = document.querySelectorAll(".close-icon")
closeIcon.forEach((eachIcon) => {
    eachIcon.addEventListener("click", (e) => {
        e.target.parentElement.style.display = "none";
    })
})