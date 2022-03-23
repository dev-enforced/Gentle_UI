const btns = document.querySelectorAll(".snackbar-button");
const baselineSnackbar = document.querySelector(".baseline");
const leadingSnackbar = document.querySelector(".leading");
const stackedSnackbar = document.querySelector(".stacked");

function showSnackbar(snackbarType) {
    if (snackbarType === "BASELINE") {
        baselineSnackbar.style.display = "flex";
        setTimeout(() => {
            baselineSnackbar.style.display = "none";
        }, 2000);
    } else if (snackbarType === "LEADING") {
        leadingSnackbar.style.display = "flex";
        setTimeout(() => {
            leadingSnackbar.style.display = "none";
        }, 2000);
    } else if (snackbarType === "STACKED") {
        stackedSnackbar.style.display = "flex";
        setTimeout(() => {
            stackedSnackbar.style.display = "none";
        }, 2000);
    }
}

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        let btnType = btn.innerText;
        showSnackbar(btnType);
    });
});